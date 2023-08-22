'use client'

import { Box, Button, Stack } from '@chakra-ui/react';
import React, { Suspense, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './Recipe/RecipeList';

// import { getClient } from "../util/apolloClient"
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import LoadingSpinner from './LoadingSpinner';

export const dynamic = "force-dynamic";

// import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
  query GetRecipes($limit: Int!, $skip: Int!, $keyword: String) {
    recipe2Collection(preview: true, limit: $limit, skip: $skip, where: { title_contains: $keyword}) {
      total,
      items {
        title,
        by,
        cookingTime,
        prepTime,
        description {
          json
        },
        date,
        imagesCollection {
          items {
            title,
            size,
            url,
            width,
            height
          }
        },
        featured,
        tags,
        ingredients,
        instructions,
        ratings,
        slug
      }
    }
  }
`;

const HomeContainer: React.FC = () => {
  // const data = await getClient().query({ query });
  // const { data: { recipe2Collection } } : RecipeData = useSuspenseQuery(query);

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const { loading, error, data, previousData, fetchMore } = useQuery(query, {
    variables: { 
      limit: 1, 
      skip: 0,
      keyword: `${searchValue}`
    },
    notifyOnNetworkStatusChange:true
  });

  const recipe2Collection: RecipeCollection = data?.recipe2Collection;  

  const hasMoreRecords = recipe2Collection?.items.length < recipe2Collection?.total;

  const handleLoadMore = () => {
    fetchMore({
      variables: { 
        skip: recipe2Collection.items.length,
        keyword: `${searchValue}`
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        return {
          recipe2Collection: {
            ...fetchMoreResult.recipe2Collection,
            items: [
              ...prev.recipe2Collection.items,
              ...fetchMoreResult.recipe2Collection.items,
            ],
          },
        };
      },
      
    });
  };

  if (error) return <p>Error : {error.message}</p>;

  return (
    <Stack spacing={3} width={["90%", "80%","70%","60%","50%"]} pb={30}>
        
        <SearchBar onSearch={handleSearch} />  
        {
          loading && !previousData ?
            <Box 
              textAlign="center" 
              justifyContent="center" 
              width="100%" 
              p="2">
                Loading Recipes
            </Box> 
            :
            <Suspense>
              <RecipeList recipes={recipe2Collection?.items} /> 
            </Suspense>
        }
        {
          loading && previousData &&
            <Box 
              textAlign="center" 
              justifyContent="center" 
              width="100%" 
              p="2">
                <LoadingSpinner />
            </Box>  
            
        }

        {hasMoreRecords && (
          <Button
            colorScheme="blue"
            variant="solid"
            fontSize={12}
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
     

    </Stack>
  );
};

export default HomeContainer;

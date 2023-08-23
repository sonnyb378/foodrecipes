'use client'

import LoadingSpinner from "@/components/LoadingSpinner";
import RecipeList from "@/components/Recipe/RecipeList";
import { gql, useQuery } from "@apollo/client"
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const query = gql`
  query getRecipeByTag($limit: Int!, $skip: Int!, $tag: String!) {
    recipe2Collection(preview: true, limit: $limit, skip: $skip, where: { tags_contains: $tag}) {
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
        ratings
      }
    }
  }
`
export default function RecipesByTags({ params }: { params: { tag: string } }) {

  const router = useRouter();

  const { loading, error, data, previousData, fetchMore } = useQuery(query, {
    variables: { 
      limit: 1, 
      skip: 0,
      tag: `${ params.tag.trim().toLowerCase() }`
    },
    notifyOnNetworkStatusChange:true
  });

  const recipe2Collection: RecipeCollection = data?.recipe2Collection; 
  const hasMoreRecords = recipe2Collection?.items.length < recipe2Collection?.total;

  if (error) return <p>Error : {error.message}</p>;

  const handleLoadMore = () => {
    fetchMore({
      variables: { 
        skip: recipe2Collection.items.length,
        tag: `${ params.tag.trim().toLowerCase() }`
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

  const clickHandler = () => {
    router.push(`/`);
}

    return (
      <Stack spacing={3} width={["90%", "80%","70%","60%","50%"]} pb={30}>

        <HStack>
          <Button width={50} onClick={ clickHandler }><ArrowBackIcon /></Button>
          <Heading as="h1" fontSize={"xl"}>Tag: </Heading>
          <Text fontSize={"2xl"} color="green.500">{ params.tag }</Text>
        </HStack>
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
            onClick={ handleLoadMore }
          >
            Load More
          </Button>
        )}
     
      </Stack>
    )
  }
  
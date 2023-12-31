"use client"

import React from "react"
import { Card, CardHeader, CardBody, HStack, Heading, VStack, Avatar, Text, Tag, Stack, Box, Flex } from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { convertToArray } from "@/util/convertTag"

interface RecipeProps {
    recipe: Recipe;
}

const CardRecipe: React.FC<RecipeProps> = ({ recipe }) => {
    
    const router = useRouter();

    const averageRating =
      (recipe.ratings.one_star +
        recipe.ratings.two_star * 2 +
        recipe.ratings.three_star * 3 +
        recipe.ratings.four_star * 4 +
        recipe.ratings.five_star * 5) /
      (recipe.ratings.total_reviews || 1);

    const formattedDate = new Date(recipe.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const descriptionText = recipe.description.json.content
        .filter(contentNode => contentNode.nodeType === 'paragraph')
        .map(paragraphNode => paragraphNode.content.map(textNode => textNode.value).join(''))
        .join(' ');

    const thumbnail = recipe.imagesCollection.items[0]?.url;
    
    const t = convertToArray(`${recipe.tags}`)

    const clickDetailHandler = (slug: string) => {
        router.push(`/details/${slug}`);
    }

    const clickTagsHandler = (tag: string, event: React.MouseEvent) => {
        event.stopPropagation();
        router.push(`/tags/${tag}`);
    }

   

    return (
        <Card variant="custom" onClick={ clickDetailHandler.bind(null, recipe.slug) }>
            <CardBody>
                <Stack direction={['column','row']} alignItems="flex-start" >
                    <Box position={"relative"} overflow="hidden" width={["100%","250px"]} height={150}>
                        <Image
                            src={thumbnail}
                            alt={'img'}
                            fill
                            priority
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 100vw, 250px"
                        />
                    </Box>
                    
               
                    <VStack width="100%" alignItems="left">
                        <Stack direction={['column',"column","row","row"]} width="100%" alignItems={["start"]} justifyContent="space-between">
                           
                            <Stack direction={["column"]} alignItems={["start"]} justifyContent="space-between">
                                <CardHeader>
                                    <Heading size="md">{ recipe.title }</Heading>
                                </CardHeader>
                                <HStack alignItems="center" justifyItems="start">
                                    <Avatar size="2xs" name={recipe.by} />
                                    <Text fontSize=".7rem">by: {recipe.by} | {formattedDate}</Text>                            
                                </HStack>                                
                            </Stack>    
                            <HStack alignItems={"center"} justifyContent="space-between">
                                <StarIcon color="orange.300" />
                                <Text fontSize=".7rem">
                                  {averageRating.toFixed(1)} | {recipe.ratings.total_reviews} Reviews
                                </Text>
                            </HStack> 

                        </Stack>
                        
                        <Text fontSize=".9rem" noOfLines={[1,1,2,2]}>
                            {descriptionText}
                        </Text>
                        <HStack alignItems="center" justifyItems="start" pt="2">
                            <Flex flexWrap="wrap" gap={1}>
                                {
                                    t.map((tag, index) => (
                                    <Tag key={index} variant="custom" size='sm' onClick={ clickTagsHandler.bind(null, tag.trim().toLowerCase()) }>
                                        {tag.trim()}
                                    </Tag>))
                                }    
                            </Flex>                                                  
                        </HStack>
                    </VStack>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardRecipe;
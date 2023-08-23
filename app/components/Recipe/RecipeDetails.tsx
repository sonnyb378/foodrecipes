'use client'

import { convertToArray } from "@/util/convertTag";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, HStack, Heading, ListItem, OrderedList, Stack, Tag, Text, VStack } from "@chakra-ui/react";

import Image from "next/image"
import { useRouter } from "next/navigation";

export default function RecipeDetails( { data }: { data: Recipe} ) {

    const router = useRouter();

    const descriptionText = data.description.json.content
    .filter(contentNode => contentNode.nodeType === 'paragraph')
    .map(paragraphNode => paragraphNode.content.map(textNode => textNode.value).join(''))
    .join(' ');

    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });


    const thumbnail = data.imagesCollection.items[0]?.url;
    const t = convertToArray(`${data.tags}`)

    const clickHandler = () => {
        router.push(`/`);
    }

  return (
    
    <Stack spacing={3} width={["95%","90%","80%","70%","50%"]} pb={30} direction={["column"]} borderWidth={0} borderColor={"white"}>
        <HStack>
            <Button width={50} onClick={ clickHandler }><ArrowBackIcon /></Button>
            <Text fontSize={"xs"}>Back</Text>
        </HStack>

        <Stack spacing={3} direction={["column", "column", "row", "row", "row"]} borderWidth={0} borderColor={"white"}>
            <VStack>            
                <Box position={"relative"} overflow="hidden" width={{ base:"100%", sm:"100%", md:"250px"}} height={{ base:"250px", sm:"250px", md:"150px"}}>
                    <Image
                        src={thumbnail}
                        alt={'img'}
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 780px) 100vw, 250px"
                    />
                </Box>
            </VStack>
            <VStack alignItems={"flex-start"}>
                <VStack alignItems="start" justifyItems="start">
                    <Heading as="h1">{ data.title}</Heading>
                </VStack>
                <VStack alignItems="start" justifyItems="start">
                    <HStack alignItems="start" justifyItems="start">
                        <Avatar size="2xs" name={data.by} />
                        <Text fontSize=".7rem">by: {data.by} | {formattedDate}</Text> 
                    </HStack>
                    <Text fontSize={"sm"}>{ descriptionText}</Text>  
                    <HStack alignItems="center" justifyItems="start" pt="2">
                        <Flex flexWrap="wrap" gap={1}>
                        {
                            t.map((tag, index) => (
                            <Tag key={index} variant="custom" size='sm'>
                                {tag.trim()}
                            </Tag>))
                        }
                        </Flex>
                    </HStack>    
                    <VStack alignItems="start" justifyItems="start" pt={5}>
                        <Heading as="h1" fontSize={"xl"}>Ingredients</Heading>
                        <OrderedList>
                        { 
                            data.ingredients.map((ingredient, index) => {
                                return(
                                    <ListItem key={index} fontSize={"xs"}>
                                        { ingredient.name } - { ingredient.quantity } 
                                        { ingredient.note ? `(${ingredient.note})` : "" } 
                                    </ListItem>
                                )
                            })                    
                        }
                        </OrderedList>                    
                        <Heading as="h1" fontSize={"xl"}>Instructions</Heading>                    
                        <OrderedList>
                        { 
                            data.instructions.map((step, index) => {
                                return(
                                    <ListItem key={index} fontSize={"xs"}>{ step }</ListItem>
                                )
                            })                    
                        }
                        </OrderedList>
                        
                    </VStack>                     
                </VStack>
                
            </VStack>
        </Stack>
    </Stack>
  )
}

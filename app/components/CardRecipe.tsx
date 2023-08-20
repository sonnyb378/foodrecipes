"use client"

import React from "react"
import { Card, CardHeader, CardBody, HStack, Image, Heading, VStack, useColorMode, Avatar, Text,
    Tag, 
    Stack
} from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons"



const CardRecipe = () => {
    const { colorMode } = useColorMode();
    return (
        <Card variant={colorMode}>
            <CardBody>
                <Stack direction={['column','row']} alignItems="flex-start" >
                    <Image bgColor={"gray.500"} width={["100%","250px"]} height="150px" />
                    <VStack width="100%" alignItems="left">
                        <Stack direction={['column',"column","row","row"]} width="100%" alignItems={["start"]} justifyContent="space-between">
                           
                            <Stack direction={["column"]} alignItems={["start"]} justifyContent="space-between">
                                <CardHeader>
                                    <Heading size="md">Food Name</Heading>
                                </CardHeader>
                                <HStack alignItems="center" justifyItems="start">
                                    <Avatar size="2xs" name='MomFoodie' />
                                    <Text fontSize=".7rem">by: MomFoodie | August 18, 2023</Text>                            
                                </HStack>                                
                            </Stack>    
                            <HStack alignItems={"center"} justifyContent="space-between">
                                <StarIcon color="orange.300" />
                                <Text fontSize=".7rem">4.9 | 301 Reviews</Text>
                            </HStack> 

                        </Stack>
                        
                        
                        <Text fontSize=".9rem" noOfLines={[1,1,2,2]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, 
leo at suscipit ultrices, justo erat faucibus purus, vel ultricies justo nulla 
nec nibh. Sed tincidunt massa eget arcu fermentum, justo erat faucibus purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
</Text>
                        <HStack alignItems="center" justifyItems="start" pt="2">
                            <Tag variant={colorMode} size='sm'>Filipino</Tag>
                            <Tag variant={colorMode} size='sm'>Chicken</Tag>
                            <Tag variant={colorMode} size='sm'>Pork</Tag>
                        </HStack>
                    </VStack>
                   
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardRecipe;
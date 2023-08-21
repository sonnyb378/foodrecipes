'use client'

import { SearchIcon } from '@chakra-ui/icons';
import { HStack, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'

const SearchBar = () => {
    return (
        // <Stack spacing={3} pb={8} width={["90%", "80%","70%","60%","50%"]}>
            <InputGroup>   
                <Input type='text' placeholder='Search food here' _placeholder={{ color: "gray.400" }} variant="filled" focusBorderColor='input'/>
                <InputRightElement pointerEvents='none'>
                    <SearchIcon color='gray.400' />
                </InputRightElement> 
            </InputGroup>
        // </Stack>
    )
}

export default SearchBar;
'use client'

import { SearchIcon } from '@chakra-ui/icons';
import { HStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

const SearchBar = () => {
    return (
        <InputGroup>   
            <Input type='text' placeholder='Search food here' _placeholder={{ color: "gray.400" }} variant="filled" focusBorderColor='input'/>
            <InputRightElement pointerEvents='none'>
                <SearchIcon color='gray.400' />
            </InputRightElement> 
        </InputGroup>
    )
}

export default SearchBar;
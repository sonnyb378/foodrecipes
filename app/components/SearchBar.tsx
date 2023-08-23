'use client'

import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import useDebounce from './hooks/useDebounce';

interface SearchComponentProps {
    onSearch: (value: string) => void;
  }

const SearchBar: React.FC<SearchComponentProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const debouncedSearch = useDebounce(inputValue, 1000)

    useEffect(() => {
        onSearch(inputValue)
    }, [debouncedSearch])

    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
    };

    return (
        <InputGroup>   
            <Input 
                type='text' 
                placeholder='Search food here' 
                _placeholder={{ color: "gray.400" }} 
                variant="filled" 
                focusBorderColor='input'
                value={inputValue} 
                onChange={handleInputChange} 
            />
            <InputRightElement pointerEvents='none'>
                <SearchIcon color='gray.400' />
            </InputRightElement> 
        </InputGroup>
    )
}

export default SearchBar;
'use client'

import { Button, useColorModeValue } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/color-mode'
import {
    MoonIcon,
    SunIcon
  } from '@chakra-ui/icons';


const ColorModeToggle = () => {

    const { colorMode, toggleColorMode } = useColorMode()  
    
    return (
        <Button variant="custom" onClick={toggleColorMode} p="2" borderRadius={50}>
            {colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
        </Button>
    )
}

export default ColorModeToggle;
'use client'

import { Button, useColorModeValue } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/color-mode'
import {
    MoonIcon,
    SunIcon
  } from '@chakra-ui/icons';


const ColorModeToggle = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    const bgColor = useColorModeValue("blue.700", "white")    
    const textColor = useColorModeValue("white", "blue.900")    
    
    return (
        <Button onClick={toggleColorMode} p="2" borderRadius={50} bg={bgColor} textColor={textColor}>
            {colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
        </Button>
    )
}

export default ColorModeToggle;
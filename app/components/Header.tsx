'use client'

import React from "react";
import { Flex, Box } from '@chakra-ui/react'

import ColorModeToggle from "./ColorModeToggle";

export default function Header() {
    

    return (
        <Flex py={8} px={5} align="center" justify="end">
            <header>
                <ColorModeToggle />
            </header>
        </Flex>
    )
}

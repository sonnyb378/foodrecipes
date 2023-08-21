import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const dark = defineStyle({
    color: "gray.200",
    size: "lg"
})

const light = defineStyle({
    color: "blue.800",
    size: "lg"
})

export const spinnerTheme = defineStyleConfig({ variants: {
    dark,
    light
} })

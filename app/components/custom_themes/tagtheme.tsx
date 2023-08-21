import { tagAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys)

export const tagTheme = defineMultiStyleConfig({
  variants: {
    light: {
        container: {
            py: "1",
            px: "2",
            bg: "gray.300",
            color: "gray.700",
            _hover: {
                bg: "blue.400",
                color: "white"
            }
        },
    },
    dark: {
        container: {
            py: "1",
            px: "2",
            bg: "gray.500",
            color: "gray.100",
            _hover: {
                bg: "cyan.200",
                color: "gray.500"
            }
        },
    }
  },
})
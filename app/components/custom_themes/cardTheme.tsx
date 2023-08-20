import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =  createMultiStyleConfigHelpers(cardAnatomy.keys)

const variants = {
  light: definePartsStyle({
    container: {
      borderColor: "gray.100",
      borderWidth: "1px",
      _hover: {
        cursor: "pointer",
        bg: "gray.100",
        borderColor: "cyan.600",
      }
    },
    header: {
        padding: "0px",
        color: "orange.500"
    }
  }),
  dark: definePartsStyle({
    container: {
        borderColor: "gray.800",
        borderWidth: "1px",
        _hover: {
            cursor: "pointer",
            bg: "blue.800",
            borderColor: "cyan.800",
        }
    },
    header: {
        padding: "0px",
        color: "orange.500"
    }
  })
};

export const cardTheme = defineMultiStyleConfig({ variants });
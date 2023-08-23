import { tagAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tagAnatomy.keys)

  const custom = definePartsStyle({
    container: {
      cursor: "pointer",
      _light: {
        py: "1",
        px: "2",
        bg: "gray.300",
        color: "gray.700",
        _hover: {
            bg: "blue.400",
            color: "white"
        }
      },
      _dark: {
        py: "1",
        px: "2",
        bg: "gray.500",
        color: "gray.100",
        _hover: {
            bg: "cyan.200",
            color: "gray.500"
        }
      }
    }
    
  })
export const tagTheme = defineMultiStyleConfig({ variants: { custom: custom } })
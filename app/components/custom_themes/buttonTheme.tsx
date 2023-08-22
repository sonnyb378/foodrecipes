import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const custom = defineStyle({
  _dark: {
    background: 'gray.300',
    color: 'black',
    _hover: {
        background: 'gray.500',
        color: 'gray.200',
    }
  },

  _light: {
    background: 'gray.500',
    color: 'white',
    _hover: {
        background: 'gray.600',
        color: 'gray.100',
    }
  }
})

export const buttonTheme = defineStyleConfig({
  variants: { custom },
})
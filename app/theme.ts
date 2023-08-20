
import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import { cardTheme } from "./components/custom_themes/cardTheme"
import { tagTheme } from "./components/custom_themes/tagtheme"

const config : ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true
}

const theme = extendTheme({ 
    semanticTokens: {
        colors: {
            border: { _light: 'blue.500', _dark: 'blue.200' },
            input: { _light: "cyan.500", _dark: "green.500" },
            "chakra-body-bg": { _light: "gray.50", _dark: "gray.900" },
        }
    }, 
    global: {
        bg:"chakra-body-bg"
    },
    styles: {
        global: (props: { colorMode: string }) => ({
            '.main': {
                display: "flex",
                flexDirection: "column",
                justifyContent:"center",
                alignItems: "center",
            },
            "h1": {
                fontWeight: "bold"
            }
        })
    },
    components: {
        Card: cardTheme,
        Tag: tagTheme
    },
    config,
    colors: {
        blue: {            
            50: "#EDF3F8",
            100: "#CCDCEA",
            200: "#ACC6DD",
            300: "#8BB0D0",
            400: "#6B9AC2",
            500: "#4A84B5",
            600: "#3B6991",
            700: "#2C4F6D",
            800: "#1E3548",
            900: "#0F1A24"            
        }
    }
})

export default theme

function definePartStyle(arg0: {
    bg: string // Background color for dark mode
    borderColor: string
}) {
    throw new Error("Function not implemented.")
}

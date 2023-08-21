import { Spinner, useColorMode } from '@chakra-ui/react'

const LoadingSpinner = () => {
    const { colorMode } = useColorMode();
    return (
        <Spinner variant={colorMode} />
    )
}

export default LoadingSpinner;
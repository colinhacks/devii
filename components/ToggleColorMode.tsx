import { Flex, Box, Switch, useColorMode } from "@chakra-ui/react";
export const ToggleColorMode: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex position='relative' mt="auto" mb='2.5'>
            <Box
                as='button'
                position='absolute'
                top='0'
                bg='transparent'
                left='0'
                right='0'
                bottom='0'
                zIndex={2}
                onClick={() => toggleColorMode()}>
            </Box>
            <Switch
                isChecked={colorMode === "dark" ? true : false}>
            </Switch>
        </Flex>
    );
}
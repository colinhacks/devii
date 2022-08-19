import { Flex, Box, Switch, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react"

export const ToggleColorMode: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [color, setColor] = useState(true);
    const toggleDarkLight = () => {
        console.log("Clicked")
    }

    return (
        <Flex position='relative' mt="auto">
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
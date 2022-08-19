import { Box, Heading } from "@chakra-ui/react";
import React from "react"

type HeaderType = {
    name: String
}

export const HeaderMain: React.FC<HeaderType> = ({ name }) => {
    return (
        <Box mt='6'>
            <Heading as='h1' textAlign="center">
                {name}
            </Heading>
        </Box>
    );
}
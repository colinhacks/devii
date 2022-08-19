import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react"
import Link from "next/link"
export const Article: React.FC = () => {
    return (
        <Link href='/article/1'>
            <Box>
                <Heading fontSize='xl' as='h3'>
                    1 - Meilleurs pratique en react
                </Heading>
                <Text>
                    Using Functional Components and Hooks Instead of Classes
                </Text>
            </Box>
        </Link>
    );
}
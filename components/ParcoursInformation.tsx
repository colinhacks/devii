import { Badge, Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react"
import { Compass } from "react-feather";

type content = {
    header: String,
    description: String,
    iconFinal?: JSX.Element
}

type ParcourInformationType = {
    year: String,
    content: Array<content>
}

export const ParcourInformation: React.FC<ParcourInformationType> = ({ year, content }) => {
    return (
        <React.Fragment>
            <Badge mt='4' variant='outline' colorScheme='green' fontSize='xl' fontWeight='bold' ml={['4', '6', '8', '12']} mb='4'>

                {year}
            </Badge>


            {content.map((c, index) => <Flex key={index} ml={['6', '8', '12', '16']} mt='4' direction='row' gap='2'>
                <Flex as='div' justify='center' alignItems='center'>
                    <Compass color='#53c9c6' />
                </Flex>
                <Box key={index}>
                    <Heading display={'flex'} flexDirection='row' fontWeight="bold" as='h2' fontSize='xl'>
                        {c.header}{c.iconFinal && c?.iconFinal}
                    </Heading>
                    <Text as='p' p='0' m='0'>
                        {c.description}
                    </Text>
                </Box>
            </Flex>)}

            <Divider mb='4' mt='2' />
        </React.Fragment>
    );
}
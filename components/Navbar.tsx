import React from "react";

import { Center, Flex } from '@chakra-ui/react'
import { IconLink } from "./IconLink";
export const Navbar: React.FC = () => {
    return (
        <React.Fragment>
            <Flex bg={"radial-gradient( circle farthest-corner at 1.3% 2.8%, rgb(255, 255, 255,.5) 0%, rgb(237, 237 ,237,.5) 100.2%)"} justifyContent={"center"} flexDirection={"column"} width={'100px'} position={"fixed"} left={"0"} bottom={0} top={0} alignItems={"center"}>
                <IconLink label={"home"} />


            </Flex>
        </React.Fragment>
    );
}
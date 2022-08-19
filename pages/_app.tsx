import React from 'react';

import ProgressBar from 'react-progressbar-on-scroll'
import Head from 'next/head';
import '../styles/base.css';
import { Navbar } from "../components/Navbar";
import { Box, ChakraProvider, Divider } from '@chakra-ui/react';
import { ColorModeScript } from "@chakra-ui/color-mode"
import theme from "../theme"
import { Header } from '../components/Header';
import { HeaderMain } from '../components/HeaderMain';
import { BlockMain } from '../components/BlocMain';
import { Article } from '../components/Article';
const App: React.FC = ({ }: any) => {
  return (
    <React.Fragment>
      <ProgressBar />
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Head>
          <title>Tsiory Ramanantoanina | Portofolio</title>
        </Head>
        <Navbar>
        </Navbar>
        <Box as='div' mx={['8', '16', '36', '64']}>
          <Header name="Ramanantoanina Safidy Tsioriniaina" />
          <Divider orientation='horizontal' />
          <HeaderMain name="A propos" />
          <BlockMain />

          <HeaderMain name="Articles" />
          <Article />
        </Box>
      </ChakraProvider>
    </React.Fragment>
  );
};

export default App;

import React from 'react';
import Head from 'next/head';
import '../styles/base.css';
import { Navbar } from "../components/Navbar";
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from "@chakra-ui/color-mode"
import theme from "../theme"
const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Head>
        <title>Tsiory Ramanantoanina | Portofolio</title>
      </Head>
      <Navbar>

      </Navbar>
    </ChakraProvider>
  );
};

export default App;

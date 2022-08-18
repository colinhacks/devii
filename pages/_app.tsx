import React from 'react';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { globals } from '../globals';
import { Header } from '../components/Header';
import '../styles/base.css';
import { ChakraProvider } from '@chakra-ui/react'

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider>
      <div className="container">
        <Head>
          {globals.googleAnalyticsId && (
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}></script>
          )}
          {globals.googleAnalyticsId && (
            <script dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', '${globals.googleAnalyticsId}');
            `,
            }}></script>
          )}
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default App;

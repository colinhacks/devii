import React from 'react';
import Head from 'next/head';
import '../styles/base.css';
import { Navbar } from "../components/Navbar";

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <div>
      <Head>
        <title>Tsiory Ramanantoanina | Portofolio</title>
      </Head>
      <Navbar>

      </Navbar>
    </div>
  );
};

export default App;

import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Gloomhaven Deckbuilder</title>
      <meta name="description" content="Build Gloomhaven Decks Frog with Hands" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    <Toaster />
  </>;
}

export default MyApp;

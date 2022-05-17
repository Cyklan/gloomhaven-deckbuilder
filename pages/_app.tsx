import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import { createContext, useState } from 'react';
import { Deck } from '../model/Deck';
import { CharacterList, Characters } from '../model/Characters';
import { DeckSave } from '../model/DeckSave';

export const DeckContext = createContext<{ deck: DeckSave | null, setDeck: (deck: DeckSave) => void; }>({
  deck: {
    cards: [],
    character: Characters.BeastTyrant,
    deckTitle:  ""
  },
  setDeck: () => { }
});

function MyApp({ Component, pageProps }: AppProps) {

  const [deck, setDeck] = useState<DeckSave | null>(null);

  return <>
    <Head>
      <title>Gloomhaven Deckbuilder</title>
      <meta name="description" content="Build Gloomhaven Decks Frog with Hands" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DeckContext.Provider value={{
      deck,
      setDeck: (d) => setDeck(d) 
    }}>
      <Component {...pageProps} />
    </DeckContext.Provider>
    <Toaster />
  </>;
}

export default MyApp;

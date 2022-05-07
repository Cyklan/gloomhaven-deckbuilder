import { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { DeckCard } from "../components/DeckCard";
import AddIcon from "../components/icons/img/add.svg"
import useLocalStorage from "../hooks/useLocalStorage";
import { Characters } from "../model/Characters";
import { Deck } from "../model/Deck";
import { LocalStorageKeys } from "../model/LocalStorageKeys";

const Decks: NextPage = () => {

  const [decks, setDecks] = useLocalStorage<Deck[]>(LocalStorageKeys.decks, []);

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="flex flex-col w-screen h-screen items-center py-4">
        <h1 className="text-5xl font-bold">
          Decks
        </h1>
      <div className="flex-auto w-full min-h-full pt-4 items-center overflow-y-auto pb-12">
        {decks?.map((deck) => <DeckCard deck={deck} key={Math.random()} />)}
        <DeckCard deck={{
          cards: [],
          character: Characters.Berserker,
          title: Characters.Berserker
        }} />
        <DeckCard deck={{
          cards: [],
          character: Characters.Tinkerer,
          title: "My great Deck"
        }} />
        <DeckCard deck={{
          cards: [],
          character: Characters.Elementalist,
          title: "Ooga Booga Caveman"
        }} />
        <DeckCard deck={{
          cards: [],
          character: Characters.Doomstalker,
          title: "Default Deck Name"
        }} />
      </div>
      </div>
      <button className="fixed bottom-8 right-8 btn btn-square btn-primary">
        <AddIcon />
      </button>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Decks), { ssr: false });
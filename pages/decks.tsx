import { NextPage } from "next";
import dynamic from "next/dynamic";
import { DeckCard } from "../components/DeckCard";
import AddIcon from "../components/icons/img/add.svg";
import useLocalStorage from "../hooks/useLocalStorage";
import { Deck } from "../model/Deck";
import { LocalStorageKeys } from "../model/LocalStorageKeys";
import Close from "../components/icons/img/close.svg";
import LeftArrow from "../components/icons/img/arrow-left.svg";
import { CharacterSelect } from "../components/CharacterSelect";
import { useRef, useState } from "react";
import { DeckBuilder } from "../components/subpages/DeckBuilder";
import { Character, CharacterList } from "../model/Characters";
import { useRouter } from "next/router";

const Decks: NextPage = () => {

  const [decks, setDecks] = useLocalStorage<Deck[]>(LocalStorageKeys.decks, []);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(CharacterList[0]);
  const [newDeckName, setNewDeckName] = useState("");
  const [createDeckView, setCreateDeckView] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState<Deck>();
  const router = useRouter();
  const modalToggle = useRef<HTMLInputElement>(null);

  function closeDeckBuilder() {
    setCreateDeckView(false);
    setNewDeckName("");
    setSelectedCharacter(CharacterList[0]);
    setSelectedDeck(undefined)
  }

  if (createDeckView) {
    return <DeckBuilder
      editDeck={selectedDeck}
      closeDeckBuilder={closeDeckBuilder}
      character={selectedCharacter}
      deckName={newDeckName}
      save={(deck) => {
        const existingDeck = decks?.find(d => d.title === deck.title);
        if (existingDeck) {
          const index = decks!.indexOf(existingDeck);
          const deckClone = [...decks!];
          deckClone[index] = deck;
          setDecks(deckClone);
        } else {
          setDecks([...(decks || []), deck]);
        }

        closeDeckBuilder();
      }} />;
  }

  const deckCards = decks?.map(deck => (
    <DeckCard
      deck={deck}
      key={deck.title + "deck"}
      onClick={() => {
        setSelectedDeck(deck);
        setSelectedCharacter(deck.character);
        modalToggle.current?.click();
      }} />
  ));

  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <button onClick={() => router.push("/")} className="absolute top-4 left-4 btn btn-square btn-primary">
          <LeftArrow />
        </button>
        <div className="flex flex-col w-screen h-screen items-center py-4">
          <h1 className="text-5xl font-bold">
            Decks
          </h1>
          <div className="flex-auto w-full min-h-full pt-4 items-center overflow-y-auto pb-12">
            {deckCards}
          </div>
        </div>
        <label htmlFor="add-deck-modal" className="fixed bottom-8 right-8 btn btn-square btn-primary">
          <AddIcon />
        </label>
      </div>
      <input ref={modalToggle} type="checkbox" id="add-deck-modal" className="modal-toggle" />
      <div className="modal min-h-screen">
        {selectedDeck
          ?
          <div className="modal-box relative mb-4">
            <button
              onClick={() => {
                setSelectedDeck(undefined);
                modalToggle.current?.click();
              }}
              className="btn btn-square absolute right-2 top-2" >
              <Close />
            </button>
            <h3 className="text-xl">{selectedDeck.title}</h3>
            <div className="py-4 w-full flex flex-col items-center gap-4">
              <button className="btn btn-primary w-2/3 uppercase tracking-widest" onClick={() => {
                setCreateDeckView(true)
              }}>
                Edit
              </button>
              <button className="btn btn-outline w-2/3 uppercase tracking-widest">
                Delete
              </button>
            </div>
          </div>
          :
          <div className="modal-box relative h-2/3 overflow-hidden mb-4">
            <label htmlFor="add-deck-modal" className="btn btn-square absolute right-2 top-2">
              <Close />
            </label>
            <h3 className="text-lg uppercase tracking-widest">New Deck</h3>
            <span>Character</span>
            <CharacterSelect value={selectedCharacter} onChange={(value) => setSelectedCharacter(value)} />
            <span>Name</span>
            <input maxLength={20} type="text" value={newDeckName} onChange={e => setNewDeckName(e.target.value)} className="input block text-base w-full border-[1px] border-white rounded-md" placeholder="Deck Name" />
            <div className="absolute bottom-4 flex justify-center left-1/2 -translate-x-1/2 ">
              <button
                className="btn btn-primary uppercase tracking-widest"
                disabled={newDeckName.length === 0}
                onClick={() => setCreateDeckView(true)} >
                Create Deck
              </button>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Decks), { ssr: false });
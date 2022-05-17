import { useRouter } from "next/router";
import { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Card } from "../model/Card";
import { getCharacter } from "../model/Characters";
import { Deck } from "../model/Deck";
import { DeckSave } from "../model/DeckSave";
import { LocalStorageKeys } from "../model/LocalStorageKeys";
import { DeckContext } from "../pages/_app";
import { convertSavedDeck } from "../src/convertSavedDeck";
import { DeckCard } from "./DeckCard";
import Close from "./icons/img/close.svg";

export const DeckPicker = () => {
  const { setDeck } = useContext(DeckContext);
  const router = useRouter()
  const [decks] = useLocalStorage<DeckSave[]>(LocalStorageKeys.decks, []);
  const deckCards = (decks || [])
    .filter(x => x.cards.length === convertSavedDeck(x).character.handLimit)
    .map((deck, i) => 
      <DeckCard 
        deck={deck} 
        key={`deck-card-${i}-${deck.deckTitle}`} 
        onClick={() => {
          setDeck(deck)
          router.push("/play")
        } } />);

  return (
    <div className="modal-box relative flex flex-col overflow-hidden">
      <h3 className="font-bold text-lg pb-4">{decks!.length > 0 ? "Choose Deck" : "Error"}</h3>
      <label htmlFor="play-modal" className="btn btn-square btn-primary fixed top-2 right-2">
        <Close />
      </label>
      <div className="pb-4 flex-auto overflow-y-auto">
        {decks!.length > 0 ?
          <>{deckCards}</>
          :
          <span>You don&apos;t have any decks yet. Create one first.</span>}
      </div>
    </div>
  );
};
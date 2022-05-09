import { FC, useEffect, useRef, useState } from "react";
import Card from "../../cards/components/Card";
import { Card as CardModel } from "../../model/Card";
import { CardList } from "../../model/CardList";
import { getCharacterCards } from "../../src/getCharacterCards";
import DeckBuildingCardContainer from "../BottomCardContainer";

import Menu from "../icons/img/menu.svg";
import Close from "../icons/img/close.svg"
import { Character } from "../../model/Characters";
interface DeckBuilderProps {
  character: Character;
  deckName: string;
}

export const DeckBuilder: FC<DeckBuilderProps> = ({ character, deckName }) => {

  const [unusedCards, setUnusedCards] = useState(character.cards.cards.sort((a, b) => a.level - b.level));
  const [deck, setDeck] = useState<CardModel[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardModel | null>(null)

  const openModalRef = useRef<HTMLInputElement>(null);

  function addToDeck(card: CardModel) {
    setDeck([...deck, card]);
    setUnusedCards(unusedCards.filter(c => c.title !== card.title));
  }

  function removeFromDeck(card: CardModel) {
    const removedCard = deck.filter(c => c.title === card.title)[0];
    setDeck(deck.filter(c => c.title !== card.title));
    // sort by card level
    setUnusedCards([...unusedCards, removedCard].sort((a, b) => a.level - b.level));
  }

  function openCardView(card: CardModel) {
    setSelectedCard(card);
    openModalRef.current?.click();
  }

  const cardViewCards = unusedCards.map(x =>
    <Card
      key={Math.random()}
      card={x}
      imagePath={`/cards/${character.prefix}/${x.imgName}`}
      onClick={() => openCardView(x)}
    />
  );

  return (
    <>
      <div className="w-screen min-h-screen bg-base-200">
        <div className="flex w-full justify-around items-center h-24 bg-base-200 fixed top-0 z-10">
          <button className="btn btn-square btn-primary">
            <Menu />
          </button>
          <span className="text-xl">{deckName}</span>
          <div className="text-xl aspect-square w-12 flex items-center justify-center">{deck.length} / {character.handLimit}</div>
        </div>
        <main className="grid grid-cols-2 lg:grid-cols-4 py-24">
          <DeckBuildingCardContainer prefix={character.prefix} cards={deck} />
          {cardViewCards}
        </main>
      </div>
      <input ref={openModalRef} type="checkbox" id="large-card-view" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box h-5/6">
          <label onClick={() => setSelectedCard(null)} htmlFor="large-card-view" className="btn btn-square absolute right-2 top-2 z-10">
            <Close />
          </label>
          <div className="relative flex flex-col h-full">
            {selectedCard && (
              <>
                <h3 className="text-center text-xl">{selectedCard.title}</h3> 
                <Card card={selectedCard} imagePath={`/cards/${character.prefix}/${selectedCard.imgName}`} />
                <div className="flex-auto flex flex-col-reverse items-center">
                  <button 
                    className="btn btn-primary max-w-max uppercase tracking-widest"
                    disabled={deck.length === character.handLimit} 
                    onClick={() => {
                      addToDeck(selectedCard);
                      setSelectedCard(null);
                      openModalRef.current?.click();
                    }}>Add to Deck</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
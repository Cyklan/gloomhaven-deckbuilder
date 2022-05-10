import { FC, useRef, useState } from "react";
import Card from "../../cards/components/Card";
import { Card as CardModel } from "../../model/Card";
import DeckBuildingCardContainer from "../BottomCardContainer";
import Menu from "../icons/img/menu.svg";
import Close from "../icons/img/close.svg"
import { Character } from "../../model/Characters";
import toast from "react-hot-toast";
import { DeckBuilderSidebar } from "../DeckBuilderSidebar";
import { Deck } from "../../model/Deck";

interface DeckBuilderProps {
  character: Character;
  deckName: string;
  closeDeckBuilder: () => void;
  save: (deck: Deck) => void;
}

export const DeckBuilder: FC<DeckBuilderProps> = ({ character, deckName, closeDeckBuilder, save }) => {

  const [unusedCards, setUnusedCards] = useState(character.cards.cards.sort((a, b) => a.level - b.level));
  const [deck, setDeck] = useState<CardModel[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardModel | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openModalRef = useRef<HTMLInputElement>(null);

  function addToDeck(card: CardModel) {
    setDeck([...deck, card]);
    setUnusedCards(unusedCards.filter(c => c.title !== card.title));
    toast.success(`Added ${card.title} to deck`, {
      style: {
        background: "#333",
        color: "white",
      }
    });
  }

  function removeFromDeck(card: CardModel) {
    const removedCard = deck.filter(c => c.title === card.title)[0];
    setDeck(deck.filter(c => c.title !== card.title));
    setUnusedCards([...unusedCards, removedCard].sort((a, b) => a.level - b.level));
    toast.success(`Removed ${card.title} from deck`, {
      style: {
        background: "#333",
        color: "white",
      }
    });
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
      <div className={`w-screen min-h-screen bg-base-200 ${sidebarOpen ? "overflow-hidden max-h-screen" : ""}`}>
        <div className="flex w-full justify-around items-center h-24 bg-base-200 fixed top-0 z-10">
          <button className="btn btn-square btn-primary" onClick={() => setSidebarOpen(true)}>
            <Menu />
          </button>
          <span className="text-xl">{deckName}</span>
          <div className="text-xl aspect-square w-12 flex items-center justify-center">{deck.length} / {character.handLimit}</div>
        </div>
        <main className="grid grid-cols-2 lg:grid-cols-4 py-24">
          <DeckBuildingCardContainer 
            cardOnClick={(card) => {
              setSelectedCard(card);
              openModalRef.current?.click();
            }}
            cards={deck}
            prefix={character.prefix}  />
          {cardViewCards}
        </main>
      </div>
      <input ref={openModalRef} type="checkbox" id="large-card-view" className="modal-toggle" />
      <div className="modal">
        <div id="large-card-view" className="modal-box h-5/6">
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
                    disabled={!deck.includes(selectedCard) && deck.length === character.handLimit} 
                    onClick={() => {
                      if (deck.includes(selectedCard)) {
                        removeFromDeck(selectedCard);
                      } else {
                        addToDeck(selectedCard);
                      }
                      setSelectedCard(null);
                      openModalRef.current?.click();
                    }}>{
                      deck.includes(selectedCard) ? "Remove" : "Add"
                    }</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <DeckBuilderSidebar save={() => {
        // save deck
        const newDeck: Deck = {
          title: deckName,
          cards: deck,
          character: character 
        }

        save(newDeck);
      }} exit={closeDeckBuilder} open={sidebarOpen} close={() => setSidebarOpen(false)} />
    </>
  )
}
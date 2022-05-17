import { useEffect, useRef, useState } from "react";
import Card from "../cards/components/Card";
import { Card as CardModel } from "../model/Card";
import styles from "../styles/BottomCardContainer.module.scss";
import Close from "./icons/img/close.svg";

export enum BottomCardContainerMode {
  DECK_BUILDING,
  PLAYING
}

interface BottomCardContainerProps {
  cards: CardModel[];
  prefix: string;
  cardOnClick: (card: CardModel) => void;
  mode?: BottomCardContainerMode;
  loseCard?: (card: CardModel) => void;
}

export default function DeckBuildingCardContainer({ cards, prefix, cardOnClick, mode, loseCard }: BottomCardContainerProps) {

  if (mode == null) {
    mode = BottomCardContainerMode.DECK_BUILDING;
  }
  const modalToggle = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedPlayCard, setSelectedPlayCard] = useState<CardModel | null>(null);
  const [cardCounters, setCardCounters] = useState<{ [key: string]: number; }>({});

  useEffect(() => {
    if (cards.length === 0) {
      setOpen(false);
    }
  }, [cards]);

  useEffect(() => {
    if (selectedPlayCard != null) {
      modalToggle.current!.checked = true;
    }
  }, [selectedPlayCard]);

  const cardElements = cards.map(x => <Card
    card={x}
    className={!open ? "pointer-events-none" : ""}
    key={`${x.title}-card`}
    imagePath={`/cards/${prefix}/${x.imgName}`}
    onClick={() => {
      cardOnClick(x);
      if (mode === BottomCardContainerMode.PLAYING) {
        setSelectedPlayCard(x);
      }
    }}
    showCounter={
      mode === BottomCardContainerMode.PLAYING
      && cardCounters[x.title] != null
      && cardCounters[x.title] > 0}
    counter={Math.min(cardCounters[x.title], x.counters.length)}
  />);

  function increaseCardCounter(title: string) {
    const newCounters = { ...cardCounters };
    newCounters[title] = newCounters[title] == null ? 1 : newCounters[title] + 1;
    setCardCounters(newCounters);
  }

  function decreaseCardCounter(title: string) {
    const newCounters = { ...cardCounters };
    newCounters[title] = newCounters[title] == null ? 0 : newCounters[title] - 1;
    setCardCounters(newCounters);
  }

  function loseSelectedCard() {
    loseCard!(selectedPlayCard!);
    const _cardCounters = { ...cardCounters };
    delete _cardCounters[selectedPlayCard!.title];
    setCardCounters(_cardCounters);
    modalToggle.current!.checked = false;
  }

  return (
    <>
      <div onClick={() => {
        if (!open && cards.length > 0) {
          setOpen(true);
        }
      }} className={`${styles.container} ${cards.length > 0 ? styles["has-content"] : ""} ${open ? styles.open : ""}`}>
        <div className={styles["card-grid"]}>
          {cardElements}
        </div>
        <div className={`${!open ? "hidden" : "fixed bottom-4 left-1/2 -translate-x-1/2"}`}>
          <button
            className="btn btn-primary tracking-widest uppercase"
            onClick={() => {
              setOpen(false);
            }}>
            Close
          </button>
        </div>
      </div>
      <input id="bottom-card-container-modal" type="checkbox" className="modal-toggle" ref={modalToggle} />
      {selectedPlayCard &&
        <div className="modal z-20">
          <div className="modal-box relative flex flex-col overflow-hidden">
            <h3 className="font-bold text-lg pb-4">{selectedPlayCard !== null && selectedPlayCard.title}</h3>
            <button onClick={() => {
              modalToggle.current!.checked = false;
              setSelectedPlayCard(null);
            }} className="btn btn-square btn-primary fixed top-2 right-2">
              <Close />
            </button>
            <div className="pb-4 flex-auto overflow-y-auto">
              <Card
                card={selectedPlayCard}
                imagePath={`/cards/${prefix}/${selectedPlayCard.imgName}`}
                showCounter={mode === BottomCardContainerMode.PLAYING
                  && cardCounters[selectedPlayCard.title] != null
                  && cardCounters[selectedPlayCard.title] > 0}
                counter={cardCounters[selectedPlayCard.title]} />
              {(selectedPlayCard.permanent ||
                cardCounters[selectedPlayCard.title] === selectedPlayCard.counters.length) &&
                <div className="w-full flex flex-col items-center mb-4">
                  <button
                    onClick={loseSelectedCard} 
                    className="btn btn-primary uppercase tracking-widest">
                    Lose
                  </button>
                </div>
              }
              {selectedPlayCard.counters.length > 0 &&
                <div className="w-full flex flex-col items-center gap-y-4">
                  {(cardCounters[selectedPlayCard.title] == null ||
                    cardCounters[selectedPlayCard.title] < selectedPlayCard.counters.length) &&
                    <button
                      onClick={() => {
                        increaseCardCounter(selectedPlayCard.title);
                      }}
                      className="btn btn-primary uppercase tracking-widest">
                      Increase Counter
                    </button>
                  }
                  {(cardCounters[selectedPlayCard.title] != null &&
                    cardCounters[selectedPlayCard.title] > 0) &&
                    <button
                      onClick={() => {
                        decreaseCardCounter(selectedPlayCard.title);
                      }}
                      className="btn btn-primary uppercase tracking-widest">
                      Decrease Counter
                    </button>
                  }
                </div>
              }
            </div>
          </div>
        </div>
      }
    </>
  );
}
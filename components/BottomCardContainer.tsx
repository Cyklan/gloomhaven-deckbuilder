import { useEffect, useRef, useState } from "react";
import Card from "../cards/components/Card";
import { Card as CardModel } from "../model/Card";
import styles from "../styles/BottomCardContainer.module.scss";

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

  const [open, setOpen] = useState(false);
  const [selectedPlayCard, setSelectedPlayCard] = useState<CardModel | null>(null);
  const [cardCounters, setCardCounters] = useState<{ [key: string]: number; }>({});

  useEffect(() => {
    if (cards.length === 0) {
      setOpen(false);
    }
  }, [cards]);

  // useEffect(() => {
  //   cards.forEach(card => {
  //     if (card.counters.length !== 0
  //       && cardCounters[card.title] != null
  //       && cardCounters[card.title] >= card.counters.length) {
  //       loseCard!(card);
  //       const _cardCounters = { ...cardCounters };
  //       delete _cardCounters[card.title];
  //       setCardCounters(_cardCounters);
  //     }
  //   })
  // }, [cardCounters, cards, loseCard])

  const cardElements = cards.map(x => <Card
    card={x}
    className={!open ? "pointer-events-none" : ""}
    key={`${x.title}-card`}
    imagePath={`/cards/${prefix}/${x.imgName}`}
    onClick={() => {
      cardOnClick(x);
    }}
    showCounter={
      open
      && mode === BottomCardContainerMode.PLAYING
      && cardCounters[x.title] != null
      && cardCounters[x.title] > 0}
    counter={Math.min(cardCounters[x.title], x.counters.length)}
  />);

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
    </>
  );
}
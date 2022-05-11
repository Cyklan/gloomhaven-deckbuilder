import { useEffect, useRef, useState } from "react";
import Card from "../cards/components/Card";
import { Card as CardModel } from "../model/Card";
import styles from "../styles/BottomCardContainer.module.scss";
import Close from "./icons/img/close.svg";
interface BottomCardContainerProps {
  cards: CardModel[];
  prefix: string;
  cardOnClick: (card: CardModel) => void;
}

export default function DeckBuildingCardContainer({ cards, prefix, cardOnClick }: BottomCardContainerProps) {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (cards.length === 0) {
      setOpen(false);
    }
  }, [cards])

  const cardElements = cards.map(x => <Card
    card={x}
    className={!open ? "pointer-events-none" : ""}
    key={`${x.title}-card`}
    imagePath={`/cards/${prefix}/${x.imgName}`} 
    onClick={() => {
      cardOnClick(x)
    }} />);

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
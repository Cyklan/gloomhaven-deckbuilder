import Card from "../cards/components/Card";
import { Card as CardModel } from "../model/Card";
import { Character } from "../model/Characters";

interface BottomCardContainerProps {
  cards: CardModel[];
  prefix: string;
}

export default function DeckBuildingCardContainer({ cards, prefix }: BottomCardContainerProps) {

  const cardElements = cards.map(x => <Card key={Math.random()} card={x} imagePath={`/cards/${prefix}/${x.imgName}`} />);

  return (
    <div className={`${cards.length > 0 ? "max-h-16" : "h-16"} border-t-2 lg:h-screen lg:min-h-screen bg-base-200 border-base-content lg:border-t-0 lg:border-r-2 w-screen lg:w-1/4 fixed bottom-0 lg:bottom-auto grid grid-cols-5 lg:grid-cols-1 overflow-hidden lg:overflow-y-auto z-10`}>
      {cardElements}
    </div>
  )
}
import { FC, useState } from "react";
import Card from "../../cards/components/Card";
import { Card as CardModel } from "../../model/Card";
import { CardList } from "../../model/CardList";
import { Characters } from "../../model/Characters";
import { getCharacterCards } from "../../src/getCharacterCards";
import DeckBuildingCardContainer from "../BottomCardContainer";

import Menu from "../icons/img/menu.svg";

interface DeckBuilderProps {
  character: Characters;
  deckName: string;
}

export const DeckBuilder: FC<DeckBuilderProps> = ({ character, deckName }) => {

  const cardList = getCharacterCards(character) as CardList;
  const [unusedCards, setUnusedCards] = useState(cardList.cards);
  const [deck, setDeck] = useState<CardModel[]>([]);

  const cardViewCards = unusedCards.map(x => <Card key={Math.random()} card={x} imagePath={`/cards/${cardList.path}/${x.imgName}`} />);

  return <div className="w-screen min-h-screen bg-base-200">
    <div className="flex w-full justify-around items-center h-24 bg-base-200 fixed top-0 z-10">
      <button className="btn btn-square btn-primary">
        <Menu />
      </button>
      <span className="text-xl">{deckName}</span>
      <div className="text-xl aspect-square w-12 flex items-center justify-center">{deck.length} / 10</div>
    </div>
    <main className="grid grid-cols-2 lg:grid-cols-4 py-24">
        <DeckBuildingCardContainer />
        {cardViewCards}
      </main>
  </div>
}
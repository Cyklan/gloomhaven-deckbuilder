import { FC } from "react";
import { Deck } from "../model/Deck";
import { CharacterIcon } from "./icons/CharacterIcon";

interface DeckCardProps {
  deck: Deck;
  onClick?: () => void;
  className?: string;
}

export const DeckCard: FC<DeckCardProps> = ({ deck, onClick, className }) => {
  return (
    <div onClick={onClick} className={`mx-auto cursor-pointer border-[1px] border-white h-48 aspect-square mb-4 ${className || ""}`}>
      <div className="flex justify-center py-4">
        <CharacterIcon className="fill-current w-16" character={deck.character} />
      </div>
      <div className="flex justify-center py-4">
        <h3 className="text-2xl text-center">{deck.title}</h3>
      </div>
    </div>
  )
}
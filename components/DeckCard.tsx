import { FC } from "react";
import { Characters } from "../model/Characters";
import { Deck } from "../model/Deck";
import { CharacterIcon } from "./icons/CharacterIcon";

interface DeckCardProps {
  deck: Deck
}

export const DeckCard: FC<DeckCardProps> = ({ deck }) => {
  return (
    <div className="w-2/3 mx-auto border-[1px] border-white h-52 mb-4">
      <div className="flex justify-center py-4">
        <CharacterIcon className="fill-current w-16" character={deck.character} />
      </div>
      <div className="flex justify-center py-4">
        <h3 className="text-2xl">{deck.title}</h3>
      </div>
    </div>
  )
}
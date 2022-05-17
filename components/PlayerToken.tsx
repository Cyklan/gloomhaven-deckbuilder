import { CSSProperties, FC } from "react";
import { Character } from "../model/Characters";
import { CharacterIcon } from "./icons/CharacterIcon";

interface PlayerTokenProps {
  character: Character;
  className?: string;
  style: CSSProperties | undefined;
}

export const PlayerToken: FC<PlayerTokenProps> = ({ character, className, style }) => {
  return (
    <div
      style={style} 
      className={`rounded-full bg-base-100 ${className}`} >
      <CharacterIcon character={character} className="fill-white scale-[65%]" />
    </div>
  );
};
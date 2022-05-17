import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PlayerToken } from "../../components/PlayerToken";
import { Card as CardModel } from "../../model/Card";
import { Character } from "../../model/Characters";

interface CardProps {
  card: CardModel;
  imagePath: string;
  onClick?: () => void;
  className?: string;
  showCounter?: boolean;
  counter?: number;
  character?: Character;
}

export default function Card({ 
  card, 
  imagePath, 
  onClick, 
  className, 
  showCounter, 
  counter,
  character }: CardProps) {

  const position = card.counters[counter && counter > 0 ? counter - 1 : -1] || {
    x: 0,
    y: 0,
  };

  return (
    <div
      className="relative">
      <div className="relative scale-[85%]">
        <Image
          className={`rounded-lg lg:rounded-3xl shrink-0 overflow-hidden ${className || ""}`}
          src={imagePath}
          width={400}
          height={600}
          alt={card.title}
          onClick={onClick}
          layout={"raw"}
        />
        {showCounter && counter && counter > 0 &&
          // TODO: replace green circle with actual token provided by Cephalofair
          <PlayerToken
            character={character!}
            style={{
              left: position.x / 400 * 100 + "%",
              top: position.y / 600 * 100 + "%",
            }}
            className="w-[10%] aspect-square bg-green-400 absolute rounded-full -translate-x-1/2 -translate-y-1/2" />
            }
      </div>
    </div>
  );
};
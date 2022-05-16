import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Card as CardModel } from "../../model/Card";

interface CardProps {
  card: CardModel;
  imagePath: string;
  onClick?: () => void;
  className?: string;
  showCounter?: boolean;
  counter?: number;
}

export default function Card({ card, imagePath, onClick, className, showCounter, counter }: CardProps) {
  return (
    <div
      className="relative">
      <div className="relative scale-[85%]">
        <Image
          className={`rounded-lg lg:rounded-3xl shrink-0 overflow-hidden ${className || ""}`}
          src={imagePath}
          width={600}
          height={800}
          alt={card.title}
          onClick={onClick}
          layout={"raw"}
        />
        {showCounter && counter && counter > 0 &&
          // TODO: calculate relative position based on pixel values
          // TODO: replace green circle with actual token provided by Cephalofair
          <div
            style={{
              top: "0%", // <-- FIX HERE
              left: "0%",
            }} 
            className="w-[10%] aspect-square bg-green-400 absolute rounded-full"></div>}
      </div>
    </div>
  );
};
import Image from "next/image";
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
    <div className="relative">
      {showCounter && counter && counter > 0 && 
        <div className="p-4 w-[50px] text-2xl flex items-center justify-center bg-base-100 aspect-square absolute z-10 right-0 scale-75">
          {counter}
        </div>
      }
      <Image
        className={`rounded-lg lg:rounded-3xl scale-[85%] shrink-0 overflow-hidden ${className || ""}`}
        src={imagePath}
        width={600}
        height={800}
        alt={card.title}
        onClick={onClick}
        layout={"responsive"}
      />
    </div>
  )
}
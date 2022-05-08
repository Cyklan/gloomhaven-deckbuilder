import Image from "next/image";
import { Card as CardModel } from "../../model/Card";

interface CardProps {
  card: CardModel;
  imagePath: string;
  onClick?: () => void;
}

export default function Card({ card, imagePath, onClick }: CardProps) {
  return (
      <Image 
        className="rounded-lg lg:rounded-3xl scale-[85%] shrink-0 overflow-hidden max-h-full" 
        src={imagePath} 
        width={600} 
        height={800} 
        alt={card.title}
        onClick={onClick}
        />
  )
}
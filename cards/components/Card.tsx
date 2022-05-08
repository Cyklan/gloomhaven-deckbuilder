import Image from "next/image";
import { Card as CardModel } from "../../model/Card";

interface CardProps {
  card: CardModel;
  imagePath: string;
}

export default function Card({ card, imagePath }: CardProps) {
  return (
      <Image className="rounded-lg lg:rounded-3xl scale-[85%] shrink-0 overflow-hidden max-h-full" src={imagePath} width={600} height={800} alt="avalanche" />
  )
}
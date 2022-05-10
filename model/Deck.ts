import { Card } from "./Card";
import { Character } from "./Characters"

export interface Deck {
  cards: Card[];
  title: string;
  character: Character;
}
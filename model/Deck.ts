import { Card } from "./Card";
import { Character, Characters } from "./Characters"

export interface Deck {
  cards: Card[];
  title: string;
  character: Character;
}
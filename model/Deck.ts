import { Card } from "./Card";
import { Characters } from "./Characters"

export interface Deck {
  cards: Card[];
  title: string;
  character: Characters;
}
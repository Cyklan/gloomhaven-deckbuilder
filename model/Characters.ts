import { CardList } from "./CardList";
import beastTyrantCards from "./cards/beasttyrant.json";
import berserkerCards from "./cards/berserker.json";
import bruteCards from "./cards/brute.json"

export enum Characters {
  BeastTyrant = "Beast Tyrant",
  Berserker = "Berserker",
  Brute = "Brute",
  Cragheart = "Cragheart",
  Doomstalker = "Doomstalker",
  Elementalist = "Elementalist",
  Mindthief = "Mindthief",
  Nightshroud = "Nightshroud",
  Plagueherald = "Plagueherald",
  Quartermaster = "Quartermaster",
  Sawbones = "Sawbones",
  Scoundrels = "Scoundrels",
  Soothsinger = "Soothsinger",
  Spellweaver = "Spellweaver",
  Summoner = "Summoner",
  Sunkeeper = "Sunkeeper",
  Tinkerer = "Tinkerer",
}

export interface Character {
  id: number;
  name: Characters;
  prefix: string;
  cards: CardList;
  handLimit: number;
}

export const BeastTyrant: Character = {
  id: 1,
  name: Characters.BeastTyrant,
  prefix: "bt",
  cards: beastTyrantCards as CardList,
  handLimit: 10
}

export const Berserker: Character = {
  id: 2,
  name: Characters.Berserker,
  prefix: "be",
  cards: berserkerCards as CardList,
  handLimit: 10
}

export const Brute: Character = {
  id: 3,
  name: Characters.Brute,
  prefix: "br",
  cards: bruteCards as CardList,
  handLimit: 10
}

export const CharacterList = [
  BeastTyrant,
  Berserker,
  Brute
]
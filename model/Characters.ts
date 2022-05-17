import { CardList } from "./CardList";
import beastTyrantCards from "./cards/beasttyrant.json";
import berserkerCards from "./cards/berserker.json";
import bruteCards from "./cards/brute.json"
import nightshroudCards from "./cards/nightshroud.json";
import quartermasterCards from "./cards/quartermaster.json";

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
  Scoundrel = "Scoundrel",
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

export const Nightshroud: Character = {
  id: 4,
  name: Characters.Nightshroud,
  prefix: "ns",
  cards: nightshroudCards as CardList,
  handLimit: 9
}

export const Quartermaster: Character = {
  id: 5,
  name: Characters.Quartermaster,
  prefix: "qm",
  cards: quartermasterCards as CardList,
  handLimit: 9
}

export const CharacterList = [
  BeastTyrant,
  Berserker,
  Brute,
  Nightshroud,
  Quartermaster
]

export function getCharacter(character: Characters): Character {
  return CharacterList.find(c => c.name === character)!;
}
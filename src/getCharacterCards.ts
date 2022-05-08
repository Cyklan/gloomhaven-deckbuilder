import { Characters } from "../model/Characters";

import berserker from "../model/cards/berserker.json";
import brute from "../model/cards/brute.json";
import { CardList } from "../model/CardList";

export function getCharacterCards(character: Characters) {
  switch (character) {
    case Characters.BeastTyrant:
      return;
    case Characters.Berserker:
      return berserker as CardList;
    case Characters.Brute:
      return brute as CardList;
    case Characters.Cragheart:
      return;
    case Characters.Doomstalker:
      return;
    case Characters.Elementalist:
      return;
    case Characters.Mindthief:
      return;
    case Characters.Nightshroud:
      return;
    case Characters.Plagueherald:
      return;
    case Characters.Quartermaster:
      return;
    case Characters.Sawbones:
      return;
    case Characters.Scoundrels:
      return;
    case Characters.Sunkeeper:
      return;
    case Characters.Summoner:
      return;
    case Characters.Tinkerer:
      return;
    default:
      return "";
  }
}

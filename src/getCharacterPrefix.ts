import { Characters } from "../model/Characters";

export function getCharacterPrefix(character: Characters): string {
  switch (character) {
    case Characters.BeastTyrant:
      return "bt";
    case Characters.Berserker:
      return "be";
    case Characters.Brute:
      return "br";
    case Characters.Cragheart:
      return "ch";
    case Characters.Doomstalker:
      return "ds";
    case Characters.Elementalist:
      return "el";
    case Characters.Mindthief:
      return "mt";
    case Characters.Nightshroud:
      return "ns";
    case Characters.Plagueherald:
      return "ph";
    case Characters.Quartermaster:
      return "qm";
    case Characters.Sawbones:
      return "sb";
    case Characters.Scoundrels:
      return "sc";
    case Characters.Sunkeeper:
      return "sk";
    case Characters.Summoner:
      return "su";
    case Characters.Tinkerer:
      return "ti";
    default:
      return "";
  }
}

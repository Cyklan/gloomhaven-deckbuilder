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

export type CharacterWithId = {
  character: Characters;
  id: number;
}

export const CharactersList: CharacterWithId[] = [
  {
    character: Characters.BeastTyrant,
    id: 1,
  },
  {
    character: Characters.Berserker,
    id: 2,
  },
  {
    character: Characters.Brute,
    id: 3,
  },
  {
    character: Characters.Cragheart,
    id: 4,
  },
  {
    character: Characters.Doomstalker,
    id: 5,
  },
  {
    character: Characters.Elementalist,
    id: 6,
  },
  {
    character: Characters.Mindthief,
    id: 7,
  },
  {
    character: Characters.Nightshroud,
    id: 8,
  },
  {
    character: Characters.Plagueherald,
    id: 9,
  },
  {
    character: Characters.Quartermaster,
    id: 10,
  },
  {
    character: Characters.Sawbones,
    id: 11,
  },
  {
    character: Characters.Scoundrels,
    id: 12,
  },
  {
    character: Characters.Soothsinger,
    id: 13,
  },
  {
    character: Characters.Spellweaver,
    id: 14,
  },
  {
    character: Characters.Summoner,
    id: 15,
  },
  {
    character: Characters.Sunkeeper,
    id: 16,
  },
  {
    character: Characters.Tinkerer,
    id: 17,
  },
]
import Image from "next/image";
import { FC } from "react";
import { Characters } from "../../model/Characters";
import { Character } from "../../model/Characters";

import BeastTyrant from "./characters/beasttyrant.svg";
import Berserker from "./characters/berserker.svg";
import Brute from "./characters/brute.svg";
import Cragheart from "./characters/cragheart.svg";
import Doomstalker from "./characters/doomstalker.svg";
import Elementalist from "./characters/elementalist.svg";
import Mindthief from "./characters/mindthief.svg";
import Nightshroud from "./characters/nightshroud.svg";
import Plagueherald from "./characters/plagueherald.svg";
import Quartermaster from "./characters/quartermaster.svg";
import Sawbones from "./characters/sawbones.svg";
import Scoundrel from "./characters/scoundrel.svg";
import Soothsinger from "./characters/soothsinger.svg"
import Spellweaver from "./characters/spellweaver.svg";
import Summoner from "./characters/summoner.svg";
import Sunkeeper from "./characters/sunkeeper.svg";
import Tinkerer from "./characters/tinkerer.svg";




export const CharacterIcon: FC<{ character: Character, className: string }> = ({ character, className }) => {

  switch (character.name) {
    case Characters.BeastTyrant:
      return <BeastTyrant className={`aspect-square ${className}`} />;
    case Characters.Berserker:
      return <Berserker className={`aspect-square ${className}`} />
    case Characters.Brute:
      return <Brute className={`aspect-square ${className}`} />
    case Characters.Cragheart:
      return <Cragheart className={`aspect-square ${className}`} />
    case Characters.Doomstalker:
      return <Doomstalker className={`aspect-square ${className}`} />
    case Characters.Elementalist:
      return <Elementalist className={`aspect-square ${className}`} />
    case Characters.Mindthief:
      return <Mindthief className={`aspect-square ${className}`} />
    case Characters.Nightshroud:
      return <Nightshroud className={`aspect-square ${className}`} />
    case Characters.Plagueherald:
      return <Plagueherald className={`aspect-square ${className}`} />
    case Characters.Quartermaster:
      return <Quartermaster className={`aspect-square ${className}`} />
    case Characters.Sawbones:
      return <Sawbones className={`aspect-square ${className}`} />
    case Characters.Scoundrel:
      return <Scoundrel className={`aspect-square ${className}`} />
    case Characters.Soothsinger:
      return <Soothsinger className={`aspect-square ${className}`} />
    case Characters.Spellweaver:
      return <Spellweaver className={`aspect-square ${className}`} />
    case Characters.Summoner:
      return <Summoner className={`aspect-square ${className}`} />
    case Characters.Sunkeeper:
      return <Sunkeeper className={`aspect-square ${className}`} />
    case Characters.Tinkerer:
      return <Tinkerer className={`aspect-square ${className}`} />
    default:
      return <Tinkerer className={`aspect-square ${className}`} />
  }
}
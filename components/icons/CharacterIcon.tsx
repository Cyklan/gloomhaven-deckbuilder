import Image from "next/image";
import { FC } from "react";
import { Characters } from "../../model/Characters";
import { Character } from "../../model/Characters";

import Berserker from "./characters/berserker.svg";
import Doomstalker from "./characters/doomstalker.svg";
import Elementalist from "./characters/elementalist.svg";
import Nightshroud from "./characters/nightshroud.svg";
import Sawbones from "./characters/sawbones.svg";
import Soothsinger from "./characters/soothsinger.svg";
import Tinkerer from "./characters/tinkerer.svg";



export const CharacterIcon: FC<{ character: Character, className: string }> = ({ character, className }) => {

  switch (character.name) {
    case Characters.Berserker:
      return <Berserker className={className} />
    case Characters.Doomstalker:
      return <Doomstalker className={className} />
    case Characters.Elementalist:
      return <Elementalist className={className} />
    case Characters.Nightshroud:
      return <Nightshroud className={className} />
    case Characters.Sawbones:
      return <Sawbones className={className} />
    case Characters.Soothsinger:
      return <Soothsinger className={className} />
    case Characters.Tinkerer:
      return <Tinkerer className={className} />
    default:
      return <Tinkerer className={className} />
  }
}
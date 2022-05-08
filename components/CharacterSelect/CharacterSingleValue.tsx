import { FC } from "react";
import { SingleValueProps, components } from "react-select";
import { CharacterWithId } from "../../model/Characters";
import { CharacterIcon } from "../icons/CharacterIcon";

export const CharacterSingleValue: FC<SingleValueProps<CharacterWithId>> = (props) => {
  const { SingleValue } = components;

  return <SingleValue {...props}>
    <div className="flex flex-row items-center py-2 px-1">
      <CharacterIcon className="fill-white w-8 pr-2" character={props.data.character} />
      <span className="text-base">{props.data.character}</span>
    </div>
  </SingleValue>
}
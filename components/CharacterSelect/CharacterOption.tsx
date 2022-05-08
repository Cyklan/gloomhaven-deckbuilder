import { FC } from "react";
import { OptionProps, components } from "react-select";
import { Characters, CharacterWithId } from "../../model/Characters";
import { CharacterIcon } from "../icons/CharacterIcon";

export const CharacterOption: FC<OptionProps<CharacterWithId>> = (props) => {
  const { Option } = components;

  const { label } = props;

  return (
    <Option {...props}>
      <div className="flex flex-row items-center">
        <CharacterIcon className="fill-white w-8 pr-2" character={props.data.character} />
        <span>{label}</span>
      </div>
    </Option>
  );
};

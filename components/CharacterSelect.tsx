import { HtmlProps } from "next/dist/shared/lib/html-context"
import { FC, HTMLProps } from "react"
import Select from "react-select"
import { CharactersList, CharacterWithId } from "../model/Characters"
import { CharacterOption } from "./CharacterSelect/CharacterOption"
import { CharacterSingleValue } from "./CharacterSelect/CharacterSingleValue"

export const CharacterSelect: FC<{ value: CharacterWithId, onChange: (value: any) => void }> = (props) => {
  return <Select
    components={{ Option: CharacterOption, SingleValue: CharacterSingleValue }}
    options={CharactersList}
    isSearchable={false}
    getOptionLabel={(option) => option.character}
    className="react-select-container"
    classNamePrefix="react-select"
    {...props}
  />
}

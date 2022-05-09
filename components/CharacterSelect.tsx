import { HtmlProps } from "next/dist/shared/lib/html-context"
import { FC, HTMLProps } from "react"
import Select from "react-select"
import { Character, CharacterList } from "../model/Characters"
import { CharacterOption } from "./CharacterSelect/CharacterOption"
import { CharacterSingleValue } from "./CharacterSelect/CharacterSingleValue"

export const CharacterSelect: FC<{ value: Character, onChange: (value: any) => void }> = (props) => {
  return <Select
    components={{ Option: CharacterOption, SingleValue: CharacterSingleValue }}
    options={CharacterList}
    isSearchable={false}
    getOptionLabel={(option) => option.name}
    className="react-select-container"
    classNamePrefix="react-select"
    {...props}
  />
}

import { Characters, getCharacter } from "../model/Characters";
import { Deck } from "../model/Deck";
import { DeckSave } from "../model/DeckSave";

export const convertSavedDeck = (deck?: DeckSave): Deck => {
  if(!deck) {
    return {
      cards: [],
      character: getCharacter(Characters.BeastTyrant),
      title: ""
    }
  }

  const character = getCharacter(deck.character);
  const deckCards = deck.cards.map(card => character.cards.cards.find(c => c.imgName === card)!)
  return {
    cards: deckCards,
    character,
    title: deck.deckTitle
  }
}
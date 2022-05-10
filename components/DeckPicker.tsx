import useLocalStorage from "../hooks/useLocalStorage";
import { Card } from "../model/Card";
import { LocalStorageKeys } from "../model/LocalStorageKeys";

export const DeckPicker = () => {
  const [decks] = useLocalStorage<Card[][]>(LocalStorageKeys.decks, []);
  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg">{decks!.length > 0 ? "Choose Deck" : "Error"}</h3>
      <p className="py-4">
        {decks!.length > 0 ?
          "deck picker uwu"
          :
          "You don't have any decks yet. Create one first."}
      </p>
      <div className="modal-action">
        <label htmlFor="play-modal" className="btn capitalize">Cancel</label>
      </div>
    </div>
  );
};
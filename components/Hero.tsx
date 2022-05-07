import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Card } from "../model/Card";
import { LocalStorageKeys } from "../model/LocalStorageKeys";

export default function Hero() {

  const [decks] = useLocalStorage<Card[][]>(LocalStorageKeys.decks, []);
  const [errorIsOpen, setErrorIsOpen] = useState(false);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Gloomhaven Deckbuilder
            </h1>
            <p className="py-6">
              Time to ditch the cards and play Gloomhaven digitally!
              <div id="actions" className="flex justify-evenly items-center mt-4" >
                <button className="btn btn-primary uppercase tracking-widest">
                  Decks
                </button>
                <label htmlFor="play-modal" className="btn btn-primary uppercase tracking-widest">Play</label>
              </div>
            </p>
          </div>
        </div>
      </div >
      <input type="checkbox" id="play-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{decks!.length > 0 ? "Choose Deck" : "Error"}</h3>
          <p className="py-4">
            {decks!.length > 0 ?
              "deck picker uwu"
              :
              "You don't have any decks yet. Create one first."}
          </p>
          <div className="modal-action">
            <label htmlFor="play-modal" className="btn">Cancel</label>
          </div>
        </div>
      </div>
    </>
  )
}
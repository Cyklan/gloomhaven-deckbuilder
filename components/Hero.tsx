import Link from "next/link";
import { useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Card } from "../model/Card";
import { LocalStorageKeys } from "../model/LocalStorageKeys";
import { DeckPicker } from "./DeckPicker";
import { HelpModal } from "./HelpModal";
import Help from "./icons/img/help.svg";

export default function Hero() {

  const [showHelp, setShowHelp] = useState(false);
  const modalToggle = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="hero min-h-screen bg-base-200 overflow-hidden relative">
        <button 
          className="btn btn-square btn-primary absolute top-4 right-4"
          onClick={() => {
            setShowHelp(true);
            modalToggle.current?.click();
          }} >
          <Help />
        </button>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Gloomhaven Deckbuilder
            </h1>
            <div className="py-6">
              Time to ditch the cards and play Gloomhaven digitally!
              <div id="actions" className="flex justify-evenly items-center mt-4" >
                <Link href="/decks">
                  <a className="btn btn-primary uppercase tracking-widest">
                    Decks
                  </a>
                </Link>
                <button
                  onClick={() => {
                    setShowHelp(false);
                    modalToggle.current?.click();
                  }}
                  className="btn btn-primary uppercase tracking-widest">Play</button>
              </div>
            </div>
          </div>
        </div>
      </div >
      <input ref={modalToggle} type="checkbox" id="play-modal" className="modal-toggle" />
      <div className="modal">
        {showHelp ? <HelpModal close={() => {
          setShowHelp(false);
          modalToggle.current?.click();
        }} /> : <DeckPicker />}
      </div>
    </>
  )
}
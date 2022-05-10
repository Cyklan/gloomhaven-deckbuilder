import { FC } from "react";
import Close from "./icons/img/close.svg";

interface HelpModalProps {
  close: () => void;
}

export const HelpModal: FC<HelpModalProps> = ({ close }) => {
  return (
    <div className="modal-box">
      <button onClick={close} className="btn btn-square absolute right-2 top-2">
        <Close />
      </button>
      <h3 className="font-bold text-lg">Help</h3>
      <p className="py-2">
        This is a simple (I hope) deckbuilder for the game of Gloomhaven. 
        It is designed for mobile, but will work on any device.
        <br />Also, it is installable like an app. If you&apos;re on Android, you will get a Popup asking you to install the app.
        <br />If you&apos;re on iOS, open the page in Safari, press Share and Add to Home Screen.
        <br />
        <br />
        If you find any errors, you can report an issue on <a className="underline" href="https://github.com/Cyklan/gloomhaven-deckbuilder">Github</a>.
      </p>
    </div>
  );
};
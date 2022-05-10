import { FC, useState } from "react";
import Close from "./icons/img/close.svg";

interface DeckBuilderSidebarProps {
  open: boolean;
  close: () => void;
  save: () => void;
  exit: () => void,
}

export const DeckBuilderSidebar: FC<DeckBuilderSidebarProps> = ({ open, close, save, exit }) => {  
  return (
    <div className={`h-full w-full p-8 transition-all bg-base-200 absolute z-30 top-0 ${open ? "left-0" : "-left-full"}`}>
      <button onClick={close} className="btn btn-square btn-primary absolute top-4 right-4">
        <Close />
      </button>
      <h3 className="text-xl">
        Menu
      </h3>
      <div className="flex flex-col gap-4 mt-4 w-2/3 m-auto">
        <button onClick={save} className="btn btn-primary uppercase tracking-widest">
          Save and Exit
        </button>
        <button onClick={exit} className="btn btn-outline uppercase tracking-widest">
          Exit without saving
        </button>
      </div>
    </div>
  );
};
import { FC, useRef, useState } from "react";
import Card from "../../cards/components/Card";
import { Card as CardModel } from "../../model/Card";
import { CardMoveTarget } from "../../model/CardMoveTargets";
import { TurnState } from "../../model/TurnState";
import { CardContainer } from "./CardContainer";
import Close from "../icons/img/close.svg";
import Check from "../icons/img/check.svg";
import { InitiativeDetailLevel } from "../../model/Initiative";

interface HandContainerProps {
  cards: CardModel[];
  prefix: string;
  availableCardActions: {
    title: string;
    action: (card: CardModel, target?: CardMoveTarget) => void;
  }[];
  selectedCards: CardModel[];
  turnState: TurnState;
  setTurnState: (turnState: TurnState) => void;
  showBottomButton: boolean;
}

export const HandContainer: FC<HandContainerProps> = ({
  cards,
  prefix,
  availableCardActions,
  selectedCards,
  turnState,
  setTurnState,
  showBottomButton,
}) => {
  const modalToggleRef = useRef<HTMLInputElement>(null);
  const [selectedCard, setSelectedCard] = useState<CardModel | null>(null);
  const [initiatveDetailLevel, setInitiativeDetailLevel] =
    useState<InitiativeDetailLevel>(InitiativeDetailLevel.LEVEL3);

  const cardElements = cards.map((card) => (
    <div key={`hand-card-${card.title}`} className="relative">
      {selectedCards.filter((x) => x.title === card.title).length > 0 && (
        <div className="p-4 bg-base-100 aspect-square absolute z-10 scale-75 right-0">
          <Check />
        </div>
      )}
      <Card
        card={card}
        imagePath={`/cards/${prefix}/${card.imgName}`}
        initiativeDetailLevel={
          turnState === TurnState.PLAYING
            ? initiatveDetailLevel
            : InitiativeDetailLevel.NONE
        }
        onClick={() => {
          modalToggleRef.current?.click();
          setSelectedCard(card);
        }}
        onInitiativeClick={() => {
          let detailLevel = initiatveDetailLevel;
          switch (detailLevel) {
            case InitiativeDetailLevel.LEVEL1:
              detailLevel = InitiativeDetailLevel.LEVEL2;
              break;
            case InitiativeDetailLevel.LEVEL2:
              detailLevel = InitiativeDetailLevel.LEVEL3;
              break;
            case InitiativeDetailLevel.LEVEL3:
              detailLevel = InitiativeDetailLevel.LEVEL4;
              break;
            case InitiativeDetailLevel.LEVEL4:
              detailLevel = InitiativeDetailLevel.LEVEL1;
              break;
          }
          setInitiativeDetailLevel(detailLevel);
        }}
      />
    </div>
  ));

  let buttonContent = "";
  let buttonAction = () => {};
  let buttonDisabled = false;

  switch (turnState) {
    case TurnState.BEGINNING:
      if (selectedCards.length === 0) {
        buttonContent = "Long Rest";
      } else if (selectedCards.length === 1) {
        buttonContent = "Play";
        buttonDisabled = true;
      } else {
        buttonContent = "Play";
        buttonDisabled = false;
        buttonAction = () => {
          setTurnState(TurnState.PLAYING);
        };
      }
      break;
    case TurnState.PLAYING:
      buttonContent = "End Turn";
      buttonDisabled = false;
      buttonAction = () => {
        setTurnState(TurnState.ENDING);
      };
      break;
    case TurnState.ENDING:
      buttonDisabled = true;
      break;
  }

  const cardActionButtons = availableCardActions.map((action) => (
    <button
      onClick={() => {
        action.action(selectedCard!);
        modalToggleRef.current?.click();
      }}
      className="btn btn-primary uppercase tracking-widest mb-2"
      key={`action-${action.title}`}
    >
      {action.title === "Pick"
        ? selectedCards.filter((x) => x.title === selectedCard?.title).length >
          0
          ? "Remove"
          : "Pick"
        : action.title}
    </button>
  ));

  return (
    <>
      <CardContainer>
        {cardElements}
        {showBottomButton && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 max-w-max">
            <button
              disabled={buttonDisabled}
              className={`btn btn-primary uppercase tracking-widest ${
                turnState === TurnState.ENDING ? "hidden" : ""
              }`}
              onClick={buttonAction}
            >
              {buttonContent}
            </button>
          </div>
        )}
      </CardContainer>
      {turnState !== TurnState.ENDING && (
        <>
          <input
            ref={modalToggleRef}
            type="checkbox"
            id="hand-modal-toggle"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box">
              <label
                onClick={() => modalToggleRef.current?.click()}
                htmlFor="large-card-view"
                className="btn btn-square absolute right-2 top-2 z-10"
              >
                <Close />
              </label>
              <div className="relative flex flex-col h-full">
                {selectedCard && (
                  <>
                    <h3 className="text-center text-xl">
                      {selectedCard.title}
                    </h3>
                    <Card
                      card={selectedCard}
                      imagePath={`/cards/${prefix}/${selectedCard.imgName}`}
                    />
                    {turnState !== TurnState.PLAYING && (
                      <div className="flex-auto flex flex-col-reverse items-center">
                        {cardActionButtons}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

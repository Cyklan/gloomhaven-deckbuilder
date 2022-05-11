import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import DeckBuildingCardContainer from "../components/BottomCardContainer";
import { HandContainer } from "../components/play/HandContainer";
import { Card as CardModel } from "../model/Card";
import { TurnState } from "../model/TurnState";
import { DeckContext } from "./_app";

const Play: NextPage = () => {

  const PAGE_OPTIONS = ["Discarded", "Hand", "Lost"];
  const router = useRouter();
  const { deck } = useContext(DeckContext);

  const [activePage, setActivePage] = useState<string>("Hand");
  const [turnCards, setTurnCards] = useState<CardModel[]>([]);
  const [permanentCards, setPermanentCards] = useState<CardModel[]>([]);
  const [handCards, setHandCards] = useState<CardModel[]>(deck?.cards || []);
  const [discardedCards, setDiscardedCards] = useState<CardModel[]>([]);
  const [lostCards, setLostCards] = useState<CardModel[]>([]);
  const [turnState, setTurnState] = useState<TurnState>(TurnState.BEGINNING);
  const [popupCards, setPopupCards] = useState<CardModel[]>([]);
  const [currentPopupCard, setCurrentPopupCard] = useState<CardModel | null>(null);
  const modalRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!deck) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (turnState === TurnState.ENDING) {
      // remove cards from turnCards
      // if card is losable, ask if card should be lost
      // then set turnState to BEGINNING

      const playedCards = [...turnCards];
      const discardableCards: CardModel[] = playedCards.filter(x => !x.losable);
      const _popupCards: CardModel[] = playedCards.filter(x => x.losable);

      if (discardableCards.length > 0) {
        setDiscardedCards([...discardedCards, ...discardableCards]);
        setHandCards(handCards.filter(card => !discardableCards.includes(card)));
      }
      if (_popupCards.length > 0) {
        setPopupCards([...popupCards, ..._popupCards]);
      }

      setTurnCards([]);
    }

    if (turnState === TurnState.PLAYING) {
      const playedCards = [...turnCards];
      // if card has a counter, add to countercards
      const counterCards = playedCards.filter(card => card.counter > 0);
      if (counterCards.length > 0) {
        const permCards = [...permanentCards, ...counterCards];
        setPopupCards([...popupCards, ...permCards]);
      }
    }
  }, [turnState]);

  useEffect(() => {
    if (!currentPopupCard && popupCards.length > 0) {
      const _popupCards = [...popupCards];
      setCurrentPopupCard(_popupCards.shift()!);
      setPopupCards(_popupCards);
      modalRef.current?.click();
    }
  }, [popupCards, currentPopupCard]);

  function addRemoveTurnCard(card: CardModel) {
    if (turnCards.some(x => x.title === card.title)) {
      const _turnCards = [...turnCards];
      _turnCards.splice(_turnCards.findIndex(x => x.title === card.title), 1);
      setTurnCards(_turnCards);
      return;
    }

    if (turnCards.length >= 2) {
      return;
    }
    setTurnCards([...turnCards, card]);
  }

  function loseCard(card: CardModel) {
    setLostCards([...lostCards, card]);
    setHandCards(handCards.filter(x => x.title !== card.title));
    if (turnCards.filter(x => x.title === card.title).length > 0) {
      setTurnCards(turnCards.filter(x => x.title !== card.title));
    }
  }

  function addCardToHandFromDiscarded(card: CardModel) {
    setDiscardedCards(discardedCards.filter(x => x.title !== card.title));
    setHandCards([...handCards, card]);
  }

  function addCardToHandFromLost(card: CardModel) {
    setLostCards(lostCards.filter(x => x.title !== card.title));
    setHandCards([...handCards, card]);
  }

  let activeContainer = <></>;
  switch (activePage) {
    case "Discarded":
      activeContainer = <HandContainer
        setTurnState={(turnState) => setTurnState(turnState)}
        prefix={deck?.character.prefix || ""}
        cards={discardedCards}
        availableCardActions={[
          {
            title: "Lose",
            action: loseCard
          },
          {
            title: "Add to Hand",
            action: addCardToHandFromDiscarded
          }
        ]}
        selectedCards={[]}
        turnState={turnState}
        showBottomButton={false} />;
      break;
    case "Hand":
      activeContainer = (
        <HandContainer
          setTurnState={(turnState) => setTurnState(turnState)}
          prefix={deck?.character.prefix || ""}
          cards={turnState === TurnState.PLAYING ? turnCards : handCards}
          availableCardActions={[
            { title: "Lose", action: loseCard },
            { title: "Pick", action: addRemoveTurnCard },
          ]}
          selectedCards={turnCards}
          turnState={turnState}
          showBottomButton={true} />
      );
      break;
    case "Lost":
      activeContainer = (
        <HandContainer
          setTurnState={(turnState) => setTurnState(turnState)}
          turnState={turnState}
          prefix={deck?.character.prefix || ""}
          cards={lostCards}
          availableCardActions={[
            { title: "Add to Hand", action: addCardToHandFromLost },
          ]}
          selectedCards={[]}
          showBottomButton={false} />
      );
      break;
  }

  const pageTabs = PAGE_OPTIONS.map(page =>
    <a
      key={`page-tab-${page}`}
      onClick={() => {
        setActivePage(page);
      }}
      className={`tab tab-bordered w-1/3 text-xl ${activePage === page ? "tab-active" : ""}`}>
      {page}
    </a>
  );

  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex flex-col items-center">
        <DeckBuildingCardContainer cardOnClick={() => { }} cards={permanentCards} prefix={deck?.character.prefix || ""} />
        <div className="tabs py-4">
          {pageTabs}
        </div>
        <div className="w-screen flex-auto mb-24 pb-24" id="screen-container">
          {activeContainer}
        </div>
      </div>
      <input ref={modalRef} className="modal-toggle" type="checkbox" id="question-modal" />
      {currentPopupCard != null && (
        <>
          <div className="modal">
            <div className="modal-box">
              <p className="py-4">
                Your Card {currentPopupCard!.title} {currentPopupCard!.counter > 0 ? "has a counter" : "is"} {
                  currentPopupCard!.losable ? "losable" : currentPopupCard!.permanent ? "permanent" : ""
                }.<br />
              </p>
              <div className="modal-action">
                {(currentPopupCard!.counter > 0 || currentPopupCard!.losable) &&
                  <button className="btn btn-primary">
                    Add to active Cards
                  </button>}
                {currentPopupCard!.losable &&
                  <button className="btn btn-primary">
                    Lose Card
                  </button>}
                <button className="btn btn-outline"
                  onClick={() => {
                    modalRef.current?.click();
                    setCurrentPopupCard(null);
                  }}
                >Cancel</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Play;
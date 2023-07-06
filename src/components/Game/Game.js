import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WinBanner from "../WinBanner";
import LossBanner from "../LossBanner";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("running");

  console.log(answer);
  const submitGuess = (value) => {
    const checkResult = checkGuess(value, answer);
    const nextGuesses = [...guesses, checkResult];
    setGuesses(nextGuesses);

    //set win condition
    if (value === answer) {
      setGameState("win");
    }
    //completion without success
    else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState("loss");
    }
  };

  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameState("running");
    console.log("game reset");
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      {gameState === "win" && (
        <WinBanner numGuesses={guesses.length} handleReset={resetGame} />
      )}
      {gameState === "loss" && (
        <LossBanner answer={answer} handleReset={resetGame} />
      )}
      <GuessInput
        guesses={guesses}
        submitGuess={submitGuess}
        disabled={gameState !== "running"}
      />
    </>
  );
}

export default Game;

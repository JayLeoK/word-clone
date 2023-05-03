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
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("running");

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

  return (
    <>
      <GuessResults guesses={guesses} />
      {gameState === "win" && <WinBanner numGuesses={guesses.length} />}
      {gameState === "loss" && <LossBanner answer={answer} />}
      <GuessInput
        submitGuess={submitGuess}
        disabled={gameState !== "running"}
      />
    </>
  );
}

export default Game;

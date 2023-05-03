import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import EndBanner from "../EndBanner";
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
    if (gameState !== "running") {
      return;
    }
    const checkResult = checkGuess(value, answer);
    const nextGuesses = [...guesses, checkResult];
    setGuesses(nextGuesses);

    //set win condition
    if (value == answer) {
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
      {gameState !== "running" && (
        <EndBanner gameState={gameState} guesses={guesses} answer={answer} />
      )}
      <GuessInput submitGuess={submitGuess}></GuessInput>
    </>
  );
}

export default Game;

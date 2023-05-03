import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const submitGuess = (value) => {
    const result = checkGuess(value, answer);
    setGuesses([...guesses, result]);
  };

  return (
    <>
      <GuessResults length={guesses.length} guesses={guesses} />

      <GuessInput submitGuess={submitGuess}></GuessInput>
    </>
  );
}

export default Game;

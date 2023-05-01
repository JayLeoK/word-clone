import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const submitGuess = (value) => {
    console.log("guess: ", value);
  };

  return (
    <>
      <GuessInput submitGuess={submitGuess}></GuessInput>
    </>
  );
}

export default Game;

import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const submitGuess = (value) => {
    const nextGuesses = [...guesses, value];
    setGuesses(nextGuesses);
  };

  return (
    <>
      <div className="guess-results">
        {guesses.map((guess, index) => {
          return (
            <p key={index} className="guess">
              {guess}
            </p>
          );
        })}
      </div>
      <GuessInput submitGuess={submitGuess}></GuessInput>
    </>
  );
}

export default Game;

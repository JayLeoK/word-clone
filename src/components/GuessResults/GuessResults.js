import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";

function GuessResults({ guesses }) {
  return (
    <>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess
          key={index}
          value={index < NUM_OF_GUESSES_ALLOWED ? guesses[index] : undefined}
        />
      ))}
    </>
  );
}

export default GuessResults;

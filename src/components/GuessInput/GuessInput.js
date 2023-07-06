import React from "react";
import Keyboard from "../Keyboard";

function GuessInput({ submitGuess, disabled, guesses }) {
  const [guessForm, setGuessForm] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    submitGuess(guessForm);
    setGuessForm("");
  }

  return (
    <>
      <form className={"guess-input-wrapper"} onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter five-character guess: </label>
        <input
          required
          disabled={disabled}
          id="guess-input"
          value={guessForm}
          type="text"
          onChange={(event) => {
            setGuessForm(event.target.value.toUpperCase());
          }}
          pattern="[A-Z]{5}"
          maxLength={5}
          title="5 letter word"
        />
      </form>
      <Keyboard setGuessForm={setGuessForm} guesses={guesses} />
    </>
  );
}

export default GuessInput;

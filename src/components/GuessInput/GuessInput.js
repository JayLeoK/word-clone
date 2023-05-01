import React from "react";
function GuessInput({ submitGuess }) {
  const [guessForm, setGuessForm] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    submitGuess(guessForm);
    setGuessForm("");
  }

  return (
    <form className={"guess-input-wrapper"} onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter five-character guess: </label>
      <input
        required
        id="guess-input"
        value={guessForm}
        type="text"
        onChange={(event) => {
          setGuessForm(event.target.value.toUpperCase());
        }}
        pattern="[A-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;

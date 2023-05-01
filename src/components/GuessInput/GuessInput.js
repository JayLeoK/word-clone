import React from "react";
function GuessInput({ submitGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    submitGuess(guess);
    setGuess("");
  }

  return (
    <form className={"guess-input-wrapper"} onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter five-character guess: </label>
      <input
        className="guess-input"
        id="guess-input"
        value={guess}
        type="text"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        pattern="[A-Z]{5}"
        aria-label="five characters"
      />
    </form>
  );
}

export default GuessInput;

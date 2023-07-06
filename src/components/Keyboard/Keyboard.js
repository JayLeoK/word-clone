import React from "react";

function Keyboard({ setGuessForm, guesses }) {
  const keysByRow = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const letterToStatus = {};
  guesses.map((guess) => {
    guess.map((letter) => {
      if (
        letterToStatus[letter.letter] === "correct" ||
        letter.status === "correct"
      ) {
        letterToStatus[letter.letter] = "correct";
      } else if (
        letterToStatus[letter.letter] === "misplaced" ||
        letter.status === "misplaced"
      ) {
        letterToStatus[letter.letter] = "misplaced";
      } else {
        letterToStatus[letter.letter] = "incorrect";
      }
    });
  });

  function keySubmit(event) {
    event.preventDefault();
    const letter = event.target.value;
    setGuessForm((form) => (form + letter).slice(0, 5));
  }
  return (
    <div>
      {keysByRow.map((row, index) => (
        <div className="keyboardRow" key={`keyboardRow ${index}`}>
          {row.map((letter) => {
            const keyStatus =
              letterToStatus && letter in letterToStatus
                ? letterToStatus[letter]
                : "";
            return (
              <button
                className={`key ${keyStatus}`}
                onClick={keySubmit}
                value={letter}
                key={letter}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default React.memo(Keyboard);

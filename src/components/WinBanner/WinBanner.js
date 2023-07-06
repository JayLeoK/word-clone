import React from "react";
import Banner from "../Banner";

function WinBanner({ numGuesses, handleReset }) {
  return (
    <Banner status={"happy"}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numGuesses > 1 ? `${numGuesses} guesses` : "1 guess"}</strong>
      </p>
      <button onClick={handleReset} className="resetButton">
        Play Again
      </button>
    </Banner>
  );
}

export default WinBanner;

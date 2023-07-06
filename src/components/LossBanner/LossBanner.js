import React from "react";
import Banner from "../Banner";

function LossBanner({ answer, handleReset }) {
  return (
    <Banner status={"sad"}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={handleReset} className="resetButton">
        Play Again
      </button>
    </Banner>
  );
}

export default LossBanner;

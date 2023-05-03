import React from "react";

function EndBanner({ gameState, guesses, answer }) {
  return (
    <>
      {gameState === "win" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses.length} guesses</strong>
          </p>
        </div>
      )}
      {gameState === "loss" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default EndBanner;

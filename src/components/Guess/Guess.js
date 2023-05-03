import React from "react";
import { range } from "../../utils.js";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ value }) {
  return (
    <p className="guess">
      {range(0, 5).map((index) => (
        <Cell
          key={index}
          status={value ? value[index].status : undefined}
          letter={value ? value[index].letter : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;

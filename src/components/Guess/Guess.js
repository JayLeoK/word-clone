import React from "react";
import { range } from "../../utils.js";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(0, 5).map((index) => (
        <span
          className={value ? "cell " + value[index].status : "cell"}
          key={index}
        >
          {value ? value[index].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

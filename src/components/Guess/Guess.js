import React from "react";
import { range } from "../../utils.js";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(0, 5).map((index) => (
        <span className={"cell"} key={index}>
          {value ? value[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

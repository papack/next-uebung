import React, { useState } from "react";

const Button = () => {
  let myArray = ["Alfred", "Britta", "Gitta"];
  let [foo, bar, joe] = myArray;
  console.log(bar);

  const [anzahl, setAnzahl] = useState(0);

  return (
    <div>
      <h1>Anzahl: {name}</h1>
      <button
        onClick={() => {
          setAnzahl(anzahl + 1);
          setName("frank");
        }}
      >
        up
      </button>
      <button
        onClick={() => {
          if (anzahl > 0) setAnzahl(anzahl - 1);
        }}
      >
        down
      </button>
      <button
        onClick={() => {
          console.log(anzahl);
        }}
      >
        test
      </button>
    </div>
  );
};

export default Button;

import React, { useState } from "react";

const Button = () => {
  const [anzahl, setAnzahl] = useState(0);

  return (
    <div>
      <h1>Anzahl: {anzahl}</h1>
      <button
        onClick={() => {
          setAnzahl(anzahl + 1);
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
    </div>
  );
};

export default Button;

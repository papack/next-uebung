import React, { useState } from "react";

const Input = () => {
  const [wert, setWert] = useState("start wert");

  let neuerwert = wert + "hallo";

  return (
    <div>
      <p>{neuerwert}</p>
      <input
        value={wert}
        onChange={(event) => {
          setWert(event.target.value);
        }}
      ></input>
    </div>
  );
};

export default Input;

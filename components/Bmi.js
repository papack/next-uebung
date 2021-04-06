import React, { useState } from "react";

const Bmi = () => {
  const [koerpergroesse, setKoerpergroesse] = useState(0);
  const [gewicht, setGewicht] = useState(0);

  let bmi = gewicht / (koerpergroesse * koerpergroesse);

  console.log(bmi);

  return (
    <div>
      <p>
        Körpergröße <br />
        <input
          value={koerpergroesse}
          type="number"
          onChange={(event) => {
            setKoerpergroesse(event.target.value);
          }}
        />
      </p>
      <p>
        Gewicht <br />{" "}
        <input
          value={gewicht}
          type="number"
          onChange={(event) => {
            setGewicht(event.target.value);
          }}
        />
      </p>
      Ihr Fetzywert ist {bmi}
    </div>
  );
};

export default Bmi;

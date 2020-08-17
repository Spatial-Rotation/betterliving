import React, { useContext } from "react";

import RecepieList from "./RecepieList";
import RecepieForm from "./RecepieForm";

function Recepie() {
  return (
    <div>
      <RecepieForm />
      <RecepieList />
    </div>
  );
}

export default Recepie;

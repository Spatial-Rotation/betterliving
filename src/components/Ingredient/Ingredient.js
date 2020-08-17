import React, { useContext } from "react";

import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";

function Ingredient() {
  return (
    <div>
      <IngredientForm />
      <IngredientList />
    </div>
  );
}

export default Ingredient;

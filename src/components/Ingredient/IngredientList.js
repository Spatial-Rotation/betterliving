import React from "react";
import { IngredientContextValue } from "./IngredientProvider";
import Ingredient from "./Ingredient";

function IngredientList() {
  const [{ ingredients }] = IngredientContextValue();
  console.log(ingredients);

  return (
    <ul className="list-group">
      {ingredients.map((Ingredient, index) => {
        const { ingredientname, category } = Ingredient;
        return (
          <li key={index} className="list-group-item active">
            {ingredientname} {category}
          </li>
        );
      })}
    </ul>
  );
}

export default IngredientList;

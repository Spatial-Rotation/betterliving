import React, { useState } from "react";
import { IngredientContextValue } from "../Ingredient/IngredientProvider";

function ShoppingListItem() {
  const [{ ingredients }] = IngredientContextValue();
  const [pickedIngredient, setpickedIngredient] = useState();

  const selectIngredients = (ingredients) => {
    console.log(ingredients);
    if (ingredients) {
      return ingredients.map((ingredient, index) => {
        const { ingredientname, category } = ingredient;
        return (
          <option value={ingredientname}>
            {ingredientname} {category}
          </option>
        );
      });
    }
  };

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="pickedIngredient">Ingredient</label>
        <select
          className="form-control"
          id="pickedIngredient"
          value={pickedIngredient}
        >
          {console.log(ingredients)};{selectIngredients(ingredients)}
        </select>

        <button>Add Ingredient</button>
      </div>
    </div>
  );
}

export default ShoppingListItem;

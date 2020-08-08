import React, { useReducer, useContext } from "react";

const ingredients = { name: "", description: "" };
const ADD_INGREDIENT = "add_ingredient";
const REMOVE_INGREDIENT = "remove_ingredient";

const addIngredient = (ingredient, ingredients) => {
  const updatedIngredients = [...ingredients];
  const updatedIngredientName = updatedIngredients.findIndex(
    (item) => item.name === ingredient.name
  );

  if (updatedIngredientName != 1) {
    updatedIngredients.push({ ...ingredients, ingredient });
  }
  return updatedIngredients;
};

function ingredientreducer(state, action) {
  console.log({ action, state });
  switch (action.type) {
    case ADD_INGREDIENT:
      return addIngredient(action.product, state);
    case "name_changed":
      return { name: action.newName };
  }
}

function IngredientForm() {
  const [state, dispatch] = useReducer(ingredientreducer, ingredients);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div>
      <div>
        <label>Item Name</label>
        <input
          type="text"
          id="name"
          value={ingredients.name}
          onChange={(event) => {
            const newName = event.target.value;
            dispatch({ type: "name_changed", newName });
            console.log(ingredients);
          }}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          id="description"
          value={ingredients.quantity}
          onChange={(event) => {
            const newDesc = event.target.value;
            dispatch({ type: "", newDesc });
            console.log(ingredients);
          }}
        />
      </div>
      <div>
        <button onClick={() => dispatch({ type: ADD_INGREDIENT })}>
          {" "}
          Add Ingredient{" "}
        </button>
      </div>
    </div>
  );
}

export default IngredientForm;

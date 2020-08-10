import React, { useReducer, useContext } from "react";
import Ingredient from "./Ingredient";
import Header from "../Header/Header";

const initialingredient = { ingredientname: "", description: "" };

const ingredients = [{ ingredientname: "Potato", description: "starchy" }];
const ADD_INGREDIENT = "add_ingredient";
const REMOVE_INGREDIENT = "remove_ingredient";
export const ingredient_context = React.createContext(null);

const addIngredient = (item, ingredients) => {
  ingredients.push(item);

  return ingredients;
};

function ingredientreducer(ingredients, action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return addIngredient(action.item, ingredients);
  }
}

function controlled(ingredient, action) {
  switch (action.type) {
    case "onChange":
      return {
        ...ingredient,
        [action.field]: action.value,
      };
  }
}

function IngredientForm(props) {
  const [state, dispatch] = useReducer(ingredientreducer, ingredients);
  const [ingredient, dispatch1] = useReducer(controlled, initialingredient);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({ type: ADD_INGREDIENT, item: { ingredientname, description } });
  };

  const onChange = (event) => {
    dispatch1({
      type: "onChange",
      field: event.target.id,
      value: event.target.value,
    });
  };

  const { ingredientname, description } = ingredient;
  const { Provider, Consumer } = ingredient_context;

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Item Name</label>
          <input
            type="text"
            id="ingredientname"
            value={ingredientname}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={onChange}
          />
        </div>
        <div>
          <button type="submit" onClick={submitHandler}>
            Add Ingredient
          </button>
        </div>
      </form>
    </div>
  );
}

export const ContextProvider = (props) => {
  return (
    <ingredient_context.Provider value={ingredients}>
      {props.children}
    </ingredient_context.Provider>
  );
};

export default IngredientForm;

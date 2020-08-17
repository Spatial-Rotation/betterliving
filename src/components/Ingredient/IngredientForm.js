import React, { useReducer, useContext, useRef } from "react";

import Header from "../Header/Header";
import { IngredientContextValue } from "./IngredientProvider";
import { controlled } from "../utils/FormInput";

const initialingredient = {
  ingredientname: "",
  description: "",
  category: "",
  storagemethod: "",
  storagedays: "",
  color: "",
};

export const initialIngredients = {
  ingredients: [],
};
const ADD_INGREDIENT = "add_ingredient";
const REMOVE_INGREDIENT = "remove_ingredient";

export function ingredientreducer(state, action) {
  console.log(action, state);
  switch (action.type) {
    case ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action.item] };
    default:
      return state;
  }
}

function IngredientForm(props) {
  const myRef = useRef(null);
  const [{ ingredients }, dispatch] = IngredientContextValue();
  const [ingredient, dispatch1] = useReducer(controlled, initialingredient);

  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();

    dispatch({
      type: ADD_INGREDIENT,
      item: {
        ingredientname,
        description,
        category,
        storagemethod,
        storagedays,
        color,
      },
    });

    dispatch1({
      type: "clearall",
      myRef,
    });
  };

  const onChange = (event) => {
    dispatch1({
      type: "onChange",
      field: event.target.id,
      value: event.target.value,
    });
  };

  const {
    ingredientname,
    description,
    category,
    storagemethod,
    storagedays,
    color,
  } = ingredient;

  return (
    <div className="container">
      <form ref={myRef} onSubmit={submitHandler}>
        <div className="form-group">
          <label>Ingredient Name</label>
          <input
            className="form-control"
            type="text"
            id="ingredientname"
            value={ingredientname}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select className="form-control" id="category" onChange={onChange}>
            <option selected="selected" value="">
              ---Select---
            </option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="spices">Spices</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat & Poultry</option>
            <option value="seasoning">Seasoning</option>
            <option value="oils">Oils</option>
          </select>
        </div>
        <div className="form-group">
          <label>Color</label>
          <input
            className="form-control"
            type="text"
            id="color"
            value={color}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Storage Method</label>

          <select
            className="form-control"
            id="storagemethod"
            onChange={onChange}
          >
            <option selected="selected" value="">
              ---Select---
            </option>
            <option value="cooldryplace">Cool Dry Place</option>
            <option value="Refrigerated">Refrigerated</option>
            <option value="deepfreezer">Deep Freezer</option>
            <option value="warmhumid">Warm and Humid</option>
            <option value="doesntmatter">Doesn't matter</option>
          </select>
        </div>
        <div className="form-group">
          <label>Storage Days</label>
          <input
            className="form-control"
            type="number"
            id="storagedays"
            value={storagedays}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            rows="4"
            columns="200"
            type="text"
            id="description"
            value={description}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" onClick={submitHandler}>
            Add Ingredient
          </button>
        </div>
      </form>
    </div>
  );
}

export default IngredientForm;

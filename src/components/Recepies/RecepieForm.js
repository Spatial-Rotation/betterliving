import React, {
  useReducer,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react";

import { RecepieContextValue } from "./RecepieProvider";
import { controlled } from "../utils/FormInput";
import { IngredientContextValue } from "../Ingredient/IngredientProvider";

const initialRecepie = {
  recepiename: "",
  description: "",
  category: "",
  cookingmethod: "",
  ingredientsrequired: [""],
  cookingtime: "",
};

export const initialRecepies = {
  recepies: [],
};

export function recepiereducer(state, action) {
  console.log(action, state);
  switch (action.type) {
    case "add_recepie":
      return { ...state, recepies: [...state.recepies, action.item] };
    default:
      return state;
  }
}

function RecepieForm(props) {
  const myRef = useRef(null);
  const [{ ingredients }] = IngredientContextValue();
  const [{ recepies }, dispatch] = RecepieContextValue();
  const [recepie, dispatch1] = useReducer(controlled, initialRecepie);

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

  function getSelectValues(e) {
    const all_selected = [...e.target.options]
      .filter((option) => option.selected)
      .map((option) => option.value);

    dispatch1({
      type: "onChange",
      field: e.target.id,
      value: all_selected,
    });
  }

  const multipleIngredients = (e) => {
    console.log(e.target.selected);

    const all = [...e.target.selected].map((o) => o.value);

    console.log(all);
    for (var i in recepie.ingredientsrequired) {
      if (i != e.target.value) {
        dispatch1({
          type: "multiple_select",
          item: {
            ingredientsrequired,
          },
        });
        console.log("item to add", recepie);
      }
    }
  };

  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();

    dispatch({
      type: "add_recepie",
      item: {
        recepiename,
        description,
        category,
        cookingmethod,
        ingredientsrequired,
        cookingtime,
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
    recepiename,
    description,
    category,
    cookingmethod,
    ingredientsrequired,
    cookingtime,
  } = recepie;

  return (
    <div className="container">
      <form ref={myRef} onSubmit={submitHandler}>
        <div className="form-group">
          <label for="recepieName">Recepie Name</label>
          <input
            className="form-control"
            type="text"
            id="recepiename"
            value={recepiename}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select className="form-control" id="category" onChange={onChange}>
            <option selected="selected" value="">
              ---Select---
            </option>
            <option value="mainCourse">Main Course</option>
            <option value="salad">Salad</option>
            <option value="appetizer">Appetizers</option>
            <option value="bbqGrill">BBQ/Grill</option>
            <option value="dessert">Dessert</option>
            <option value="snacks">Snacks</option>
          </select>
        </div>
        <div className="form-group">
          <label>Cooking Time</label>
          <input
            className="form-control"
            type="number"
            id="cookingtime"
            value={cookingtime}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Ingredients Required</label>
          <select
            className="form-control"
            id="ingredientsrequired"
            onChange={getSelectValues}
            multiple="true"
          >
            {console.log(ingredients)};{selectIngredients(ingredients)}
          </select>
        </div>

        <div>{ingredientsrequired}</div>

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
            Add Recepie
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecepieForm;

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  initialIngredients,
  ingredientreducer,
} from "./components/Ingredient/IngredientForm";
import {
  initialRecepies,
  recepiereducer,
} from "./components/Recepies/RecepieForm";
import { IngredientContextProvider } from "./components/Ingredient/IngredientProvider";
import { RecepieContextProvider } from "./components/Recepies/RecepieProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IngredientContextProvider
        reducer={ingredientreducer}
        initialState={initialIngredients}
      >
        <RecepieContextProvider
          reducer={recepiereducer}
          initialState={initialRecepies}
        >
          <App />
        </RecepieContextProvider>
      </IngredientContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Ingredient from "./components/Ingredient/Ingredient";
import Recepie from "./components/Recepies/Recepie";
import Header from "./components/Header/Header";
import Home from "./components/Home/HomePage";
import Main from "./main";
import ShoppingListItem from "./components/ShoppingList/ShoppingListItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ShoppingListItem />
    </div>
  );
}

export default App;

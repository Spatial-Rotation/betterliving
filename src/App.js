import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import IngredientForm from "./components/Ingredient/IngredientForm";
import Header from "./components/Header/Header";
import Home from "./components/Home/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <IngredientForm />
    </div>
  );
}

export default App;

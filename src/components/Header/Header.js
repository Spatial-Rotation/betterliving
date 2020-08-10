import React, { useContext } from "react";
import { ingredient_context } from "../Ingredient/IngredientForm";

import "./Header.scss";
import sortedliving from "./sortedliving.png";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Header = () => {
  var ingredients = useContext(ingredient_context);
  console.log("this", ingredients);
  return (
    <nav className="header">
      <img className="header__logo" src={sortedliving} alt="better logo" />

      <div className="header__search">
        <input className="header__field" type="text" />
      </div>

      <div>{ingredients?.length}</div>

      <div className="header__nav">
        <div className="header__option">
          <span>Ingredients</span>
        </div>
        <div className="header__option">
          <span>Recepies</span>
        </div>
        <div className="header__option">
          <span>Lists</span>
        </div>
        <div className="header__option">
          <span>Calendar</span>
        </div>
        <div className="header__option">
          <span>Blogs</span>
        </div>
      </div>

      <button className="header__logout">Logout</button>
    </nav>
  );
};

// #endregion

export default Header;

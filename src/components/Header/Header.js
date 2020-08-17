import React, { useContext } from "react";
import { IngredientContextValue } from "../Ingredient/IngredientProvider";
import { RecepieContextValue } from "../Recepies/RecepieProvider";
import { Link, Redirect } from "react-router-dom";

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
function Header() {
  const [{ ingredients }] = IngredientContextValue();
  const [{ recepies }] = RecepieContextValue();

  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={sortedliving} alt="better logo" />
      </Link>

      <div className="header__search">
        <input className="header__field" type="text" />
      </div>

      <div className="header__nav">
        <Link className="header__option" to="/ingredient">
          Ingredients({ingredients?.length})
        </Link>

        <Link className="header__option" to="/recepie">
          Receipes({recepies?.length})
        </Link>

        <Link className="header__option" to="/shoppinglist">
          Lists()
        </Link>

        <Link className="header__option" to="/calendar">
          Calendar
        </Link>

        <Link className="header__option" to="/about">
          About
        </Link>
      </div>

      <button className="header__logout">Logout</button>
    </nav>
  );
}

// #endregion

export default Header;

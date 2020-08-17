import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Ingredient from "./components/Ingredient/Ingredient";
import Recepies from "./components/Recepies/Recepie";
import HomePage from "./components/Home/HomePage";

const ProtectedOccupantRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("occupant") ? (
        <Component {...props} id={localStorage.getItem("occupant")} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )
    }
  />
);

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("admin") ? (
        <Component {...props} id={localStorage.getItem("admin")} />
      ) : (
        <Redirect
          to={{
            pathname: "/admin/login",
          }}
        />
      )
    }
  />
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/ingredient" component={Ingredient} />
      <Route exact path="/recepie" component={Recepies} />
    </Switch>
  </main>
);

export default Main;

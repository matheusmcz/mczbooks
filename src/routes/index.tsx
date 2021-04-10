import React from "react";
import { Switch } from "react-router-dom";
import BooksList from "../components/BooksList";
import { Home } from "../components/Home";
import Route from "./route";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalogo" isPrivate component={BooksList} />
    </Switch>
  );
};

export default Routes;

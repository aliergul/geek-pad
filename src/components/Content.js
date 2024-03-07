import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Series from "../pages/Series/Series";
import Games from "../pages/Games/Games";

const Content = () => {
  return (
    <div>
      xxx
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/movies">
          <Movies />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/series">
          <Series />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/games">
          <Games />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;

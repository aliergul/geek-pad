import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Series from "../pages/Series/Series";
import Games from "../pages/Games/Games";
import Notepad from "../pages/Notepad/Notepad";

const Content = () => {
  return (
    <main className="flex-auto">
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
      <Switch>
        <Route exact path="/notepad">
          <Notepad />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;

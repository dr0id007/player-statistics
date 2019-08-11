import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./comp/views/home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

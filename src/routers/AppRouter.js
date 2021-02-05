import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Inicio } from "../component/inicio/inicio";
import { Login } from "../component/login";
import { Test1 } from "../component/test1/test1";
import { Test2 } from "../component/test2/test2";
import { Navbar } from "../component/ui/NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Inicio} />
          <Route exact path="/test1" component={Test1} />
          <Route exact path="/test2" component={Test2} />
        </Switch>
      </div>
    </Router>
  );
};

import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import { Header } from "./Components/Header";
import { Recipes } from "./Components/Recipes";
import { LandingPage } from "./Components/LandingPage";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="pt-3">
        <BrowserRouter>
          <Switch>
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/profile" component={() => <h1>Profile</h1>} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

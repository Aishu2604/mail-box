import "./App.css";
import React from "react";
import SignUp from "./Components/SignUp/SignUp";
import FrontPage from "./Components/Front Page/FrontPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>Let's Start Friend's</header>
      <Switch>
        <Route path="/front" exact>
          <FrontPage />
        </Route>
        <Route path="/" exact>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

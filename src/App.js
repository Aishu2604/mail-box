import "./App.css";
import React from "react";
import SignUp from "./Components/SignUp/SignUp";
import FrontPage from "./Components/Front Page/FrontPage";
import { Route, Switch } from "react-router-dom";
import MailBody from "./Components/Mail Body/MailBody";

function App() {
  return (
    <div className="App">
      <header>Let's Start Friend's</header>
      <Switch>
        <Route path="/" exact>
          <SignUp />
        </Route>
        <Route path="/front" exact>
          <FrontPage />
        </Route>
        <Route path="/mailBody" exact>
          <MailBody />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

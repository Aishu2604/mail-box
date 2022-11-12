import "./App.css";
import React, { useEffect } from "react";
import SignUp from "./Components/SignUp/SignUp";
import FrontPage from "./Components/Front Page/FrontPage";
import { Route, Switch } from "react-router-dom";
import MailBody from "./Components/Mail Body/MailBody";
import MessageInbox from "./Components/Message Inbox/MessageInbox";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreater } from "./store/store-action";

function App() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.MailBoxId);
  // useEffect(() => {
  //   dispatch(ActionCreater(userEmail));
  // }, []);
  dispatch(ActionCreater(userEmail));
  return (
    <div className="App">
      <header>Let's Start Friend's</header>
      <Switch>
        <Route path="/" exact>
          <SignUp />
        </Route>
        <Route path="/front">
          <FrontPage />
        </Route>
        <Route path="/message" exact>
          <MessageInbox />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useEffect } from "react";
import SignUp from "./Components/SignUp/SignUp";
import FrontPage from "./Components/Front Page/FrontPage";
import { Route, Switch } from "react-router-dom";
import MessageInbox from "./Components/Message Inbox/MessageInbox";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreater } from "./store/store-action";
import SentBox from "./Components/Message Sent Box/SentBox";
import { ActionForSentMail } from "./store/store-action";

function App() {
  
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.MailBoxId);

  useEffect(() => {
    let call = setInterval(() => {
      console.log("CALL KR RHE");
      dispatch(ActionCreater(userEmail));
    }, 2000);
    return () => clearInterval(call);
  }, []);

  dispatch(ActionForSentMail(userEmail));

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
        <Route path="/receivemessage/:id">
          <MessageInbox />
        </Route>
        <Route path="/sentmessage/:id">
          <SentBox />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

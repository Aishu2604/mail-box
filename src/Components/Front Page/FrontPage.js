import React, { useEffect } from "react";
import { useHistory, Route } from "react-router-dom";
import Inbox from "./Inbox";
import useHttp from "../Hook/useHttp";
import { manageEmailActions } from "../../store/email-reducer";
import MailBody from "../Mail Body/MailBody";
import { useDispatch, useSelector } from "react-redux";
import classes from "./FrontPage.module.css";
import Welcome from "./Welcome";

const FrontPage = () => {
  const history = useHistory();
  const [error, sendRequest] = useHttp();
  const composeMailBodyHandler = () => {
    history.push("/mailBody");
  };
  const userEmail = useSelector((state) => state.auth.MailBoxId);
  const dispatch = useDispatch();
  console.log(userEmail);
  const mail3 = userEmail.replace("@", "");
  const mail4 = mail3.replace(".", "");
  const receiveMail = useSelector((state) => state.mailmanager.receive);
  console.log(receiveMail);
  useEffect(() => {
    const resData = (res) => {
      console.log(res.data);
      dispatch(manageEmailActions.setReceiveMail(res.data));
    };
    sendRequest(
      {
        request: "get",
        url: `https://email-box-8964b-default-rtdb.firebaseio.com/receive${mail4}.json`,
        header: { "Content-type": "application/json" },
      },
      resData
    );
  }, []);
  return (
    <div>
      <main className={classes.main}>
        <section className={classes.section}>
          <h2>Welcome! Your Mail Box</h2>
          <button
            onClick={() => {
              history.push("/front/compose");
            }}
          >
            Compose
          </button>
          <button
            onClick={() => {
              history.push("/front/inbox");
            }}
          >
            Inbox
          </button>
          <button>Sent</button>
        </section>
        <Route path="/front/inbox">
          <section className={classes.inbox_main}>
            {receiveMail.map((mail) => {
              return <Inbox mails={mail} />;
            })}
          </section>
        </Route>
        <Route path="/front/compose">
          <MailBody />
        </Route>
        <Route path="/mailbox/welcome">
          <Welcome />
        </Route>
      </main>
    </div>
  );
};

export default FrontPage;

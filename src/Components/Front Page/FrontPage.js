import React from "react";
import { useHistory, Route } from "react-router-dom";
import Inbox from "./Inbox";
import MailBody from "../Mail Body/MailBody";
import { useSelector } from "react-redux";
import classes from "./FrontPage.module.css";
import Welcome from "./Welcome";
import { useParams } from "react-router-dom";
import SentBox from "../Message Sent Box/SentBox";

const FrontPage = () => {
  const history = useHistory();

  const receiveMail = useSelector((state) => state.mailmanager.receive);
  const sentMail = useSelector((state) => state.mailmanager.sent);
  console.log(sentMail)
  console.log(receiveMail);
  const { id } = useParams();
  console.log(id, "==>ID");

  let unSeen = 0;
  receiveMail.forEach((data) => {
    if (data.seen == false) {
      unSeen = unSeen + 1;
    }
  });

  console.log(unSeen, "UNSEEN MESSAGES");
  return (
    <div>
      <main className={classes.main}>
        <section className={classes.section}>
          <h4>Your Mail Box</h4>
          <button
            onClick={() => {
              history.push("/front/compose");
            }}
          >
            Compose
          </button>
          <button
            onClick={() => {
              history.push("/front/receiveinbox");
            }}
          >{`Inbox ${unSeen}`}</button>
          <button
            onClick={() => {
              history.push("/front/inbox");
            }}
          >
            Sent
          </button>
        </section>
        <Route path="/front/receiveinbox">
          <section className={classes.inbox_main}>
            {receiveMail.map((mail) => {
              return <Inbox key={mail.id} mails={mail} type={"receive"} />;
            })}
          </section>
        </Route>
        <Route path="/front/compose">
          <MailBody />
        </Route>
        <Route path="/front/welcome">
          <Welcome />
        </Route>
        <Route path="/front/inbox">
          <section className={classes.inbox_main}>
            {sentMail.map((mail) => {
              return <Inbox key={mail.id} mails={mail} type={"sent"} />;
            })}
          </section>
        </Route>
      </main>
    </div>
  );
};

export default FrontPage;

import React from "react";
import classes from "./Inbox.module.css";
import { Link } from "react-router-dom";
import useHttp from "../Hook/useHttp";
import { useSelector, useDispatch } from "react-redux";
import { manageEmailActions } from "../../store/email-reducer";
const Inbox = (prop) => {
  const [error, sendRequest] = useHttp();
  const userMail = useSelector((state) => state.auth.MailBoxId);
  console.log(userMail);
  const mail3 = userMail.replace("@", "");
  const mail4 = mail3.replace(".", "");
  const dispatch = useDispatch();
  console.log(prop, "==>inside inbox");
  const removeSeenHandler = () => {
    const dataObj = {
      seen: true,
    };
    const responseHandler = (res) => {
      dispatch(manageEmailActions.seenMessage(prop.mails.id));
      console.log(res);
    };
    sendRequest(
      {
        request: "patch",
        url: `https://email-box-8964b-default-rtdb.firebaseio.com/receive${mail4}/${prop.mails.id}.json`,
        data: dataObj,
        header: { "Content-type": "application/json" },
      },
      responseHandler
    );
  };

  return (
    <div>
      <main className={classes.main}>
        <ul>
          <li className={classes.list}>
            <Link
              onClick={removeSeenHandler}
              style={{
                backgroundColor: prop.mails.seen === false ? "grey" : "white",
              }}
              to={"/message"}
            >
              {prop.mails.message}
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};
export default Inbox;

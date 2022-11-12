import React from "react";
import classes from "./MessageInbox.module.css";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../Hook/useHttp";
import { manageEmailActions } from "../../store/email-reducer";

const MessageInbox = () => {
  const mails = useSelector((state) => state.mailmanager.receive);
  const userMail = useSelector((state) => state.auth.MailBoxId)
  const mail3 = userMail.replace("@", "");
  const mail4 = mail3.replace(".", "");
  // const { id } = useParams();
  const [error, sendRequest] = useHttp()
  const dispatch = useDispatch()
  const history = useHistory()

  console.log(mails, "==>MESSAGE");
  let arr = mails.find((index) => index.id);

  console.log(arr);
  const deleteMailHandler=()=>
  {
    const responseHandler=()=>
    {
      dispatch(manageEmailActions.deleteMail(arr.id))
      alert('Message Deleted Successfully')
      history.replace('/front/inbox')
    }

    sendRequest(
      {
        request: "delete",
        url: `https://email-box-8964b-default-rtdb.firebaseio.com/receive${mail4}/${arr.id}.json`,
        header: { "Content-type": "application/json" },
      },
      responseHandler
    );
  }
  return (
    <div>
      {error && <h3>{error}</h3>}
      <h1 className={classes.heading}>INBOX</h1>
      <main className={classes.main}>
        <h5>{arr ? arr.subject : "loading.."}</h5>
        <p>{arr ? arr.message : "loading.."}</p>
      </main>
      <button onClick={deleteMailHandler}>Delete Mail</button>
    </div>
  );
};

export default MessageInbox;

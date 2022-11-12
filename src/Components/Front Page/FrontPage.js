import React from "react";
import { useHistory } from "react-router-dom";

const FrontPage = () => {
  const history = useHistory()
  const composeMailBodyHandler = () => {
    history.push('/mailBody')
  }
  return (
    <div>
      <h2>Welcome! Your Mail Box</h2>
      <button onClick={composeMailBodyHandler}>Compose Mail</button>
    </div>
  );
};

export default FrontPage;

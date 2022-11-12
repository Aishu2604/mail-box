import { manageEmailActions } from "./email-reducer";
import axios from "axios";
export const ActionCreater = (userEmail) => {
  console.log("ACTION");
  console.log(userEmail);
  const mail1 = userEmail.replace(".", "");
  console.log(mail1);
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        let res = await axios.get(
          `https://email-box-8964b-default-rtdb.firebaseio.com/receive${mail1}.json`
        );
        console.log(res, "==>ACTIONS");
        dispatch(manageEmailActions.setReceiveMail(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  };
};

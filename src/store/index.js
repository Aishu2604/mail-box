import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import manageEmailReducer from "./email-reducer";

const store = configureStore({
  reducer: { auth: authReducer, mailmanager: manageEmailReducer },
});

export default store;

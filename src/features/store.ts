import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact/contact-slice";
import commonReducer from "./common/common-slice";

const store = configureStore({
  reducer: {
    common : commonReducer,
    contact : contactReducer
  },
  devTools: true,
});
export default store;

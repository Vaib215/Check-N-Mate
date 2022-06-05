import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// import themeReducer from "./theme/theme.reducer";
import loginReducer from './login/login.reducer'
export default configureStore({
  reducer: {
    // theme: themeReducer,
    login : loginReducer,
  },
  middleware: [logger],
});

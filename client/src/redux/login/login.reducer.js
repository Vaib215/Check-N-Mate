import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoggedin: false,
  isLoginStarted : false,
  isRegisterStarted : false
}

const loginSlice = createSlice({
  name: "login",
  initialState: INITIAL_STATE,
  reudcers: {
    loginStarted : (state) => {
      state.isLoginStarted = true;
    },
    loginCompleted: (state, action) => {
      state.isLoggedin = action.payload;
    },
    registerStarted: (state) => {
      state.isRegisterStarted = true
    },
    registerCompleted: (state, action) => {
      state.isLoggedin = action.payload
    }
  }
})

export const {
  loginStarted,
  loginCompleted,
  registerStarted,
  registerCompleted
} = loginSlice.actions
export default loginSlice.reducer
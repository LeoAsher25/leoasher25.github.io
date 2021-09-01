import {  TOGGLE_AUTH, GET_AUTH, SAVE_AUTH } from "./types";

export const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {

    // handle toggle authentication
    case TOGGLE_AUTH:
      console.log("toggle auth!");
      state = !state;
      return state;

    case GET_AUTH:
      const _auth = localStorage.getItem("authentication");
      if(_auth){
        state = JSON.parse(_auth);
      }
      return state;

    case SAVE_AUTH:
      localStorage.setItem("authentication", payload.isAuthenticated);
      return state;

    default:
      return state;
  }
};

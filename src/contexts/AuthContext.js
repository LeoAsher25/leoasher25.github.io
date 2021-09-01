import React, { useEffect, useReducer } from "react";
import { authReducer } from "../reducers/AuthReducer";
import { GET_AUTH, SAVE_AUTH } from "../reducers/types";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, AuthDispatch] = useReducer(authReducer, false);

  useEffect(() => {
    AuthDispatch({
      type: GET_AUTH,
      payload:  null
    })
  },[])

  useEffect(() => {
    AuthDispatch({
      type: SAVE_AUTH,
      payload: {
        isAuthenticated
      }
    })
  }, [isAuthenticated])

  const authContextData = {
    isAuthenticated,
    AuthDispatch,
  };
  

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

import React, { useEffect, useReducer } from "react";
import { themeReducer } from "../reducers/ThemeReducer";
import { GET_THEME, SAVE_THEME } from "../reducers/types";
import { _themeDatas } from "./_data";

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, Themedispatch] = useReducer(themeReducer, _themeDatas);
  useEffect(() => {
    Themedispatch({
      type: GET_THEME,
      payload: null,
    });
  }, []);

  useEffect(() => {
    Themedispatch({
      type: SAVE_THEME,
      payload: { theme },
    });
  }, [theme]);

  const themeData = {
    theme,
    Themedispatch,
  };

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

import React, { useEffect, useReducer } from "react";
import { themeReducer } from "../reducers/ThemeReducer";
import { GET_THEME, SAVE_THEME } from "../reducers/types";

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, Themedispatch] = useReducer(themeReducer, {
    isLightTheme: true,
    lightTheme: {
      backgroundColor: "#fefefe",
      color: "black",
      boxShadowColor: "rgba(0, 0, 0, 0.2)",
      boxShadowColor1: "rgba(0, 0, 0, 0.3)",
    },
    darkTheme: {
      backgroundColor: "#222",
      color: "#eee",
      boxShadowColor: "rgba(0, 0, 0, 0.4)",
      boxShadowColor1: "rgba(0, 0, 0, 0.6)",
    },
  });
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

import { GET_THEME, SAVE_THEME, TOGGLE_THEME } from "./types";

export const themeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_THEME:
      const newState = { ...state };
      newState.isLightTheme = !newState.isLightTheme;
      return newState;

    case SAVE_THEME:
      localStorage.setItem("theme", JSON.stringify(payload.theme));
      return state;

    case GET_THEME:
      const _theme = localStorage.getItem("theme");
      if (_theme) {
        return JSON.parse(_theme);
      }
      return state;

    default:
      return state;
  }
};

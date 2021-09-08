import React, { useContext } from "react";
import NewestProduct from "../../components/NewestProduct";
import WeeklyBest from "../../components/WeeklyBest";
import NewestProductContextProvider from "../../contexts/NewestProductContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import WeeklyBestContextProvider from "../../contexts/WeeklyBestContext";
import HomeBanner from "../../partials/HomeBanner";

import "./HomePage.scss";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  return (
    <div
      className="home-page"
      style={{ backgroundColor: style.backgroundColor, color: style.color }}
    >
      <HomeBanner />

      <NewestProductContextProvider>
        <NewestProduct />
      </NewestProductContextProvider>

      <WeeklyBestContextProvider>
        <WeeklyBest />
      </WeeklyBestContextProvider>
    </div>
  );
};

export default HomePage;

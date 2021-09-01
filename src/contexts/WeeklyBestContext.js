import React, { useState } from "react";
import { _weeklyBests } from "./_data";

export const WeeklyBestContext = React.createContext();

const WeeklyBestContextProvider = ({ children }) => {
  const [weeklyBests, setWeeklyBest] = useState(_weeklyBests);

  const weeklyBestDatas = {
    weeklyBests,
    setWeeklyBest,
  };

  return (
    <WeeklyBestContext.Provider value={weeklyBestDatas}>
      {children}
    </WeeklyBestContext.Provider>
  );
};

export default WeeklyBestContextProvider;

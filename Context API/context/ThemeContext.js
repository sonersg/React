import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState(localStorage.getItem("theme") || "dark");

  React.useEffect(() => {
    // console.log(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const values = {
    theme,
    settheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

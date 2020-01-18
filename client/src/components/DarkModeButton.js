import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <div className="body">
        <div className={darkMode ? "light" : "dark"}>
          <h1> Women's Soccer Team</h1>
          <button
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          >
            ON/OFF
          </button>
        </div>
      </div>
    </div>
  );
};
export default DarkModeButton;

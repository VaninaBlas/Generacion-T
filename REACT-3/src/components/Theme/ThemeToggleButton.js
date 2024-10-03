import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext); 

  return (
    <button onClick={toggleTheme} style={{ margin: "10px" }}>
      Cambiar Tema
    </button>
  );
};

export default ThemeToggleButton;

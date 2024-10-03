import React from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import "./assets/styles/styles.css";
import DashPage from "./pages/DashPage.js/DashPage";

function App() {
  return (
    <ThemeProvider>
      <DashPage />
    </ThemeProvider>
  );
}

export default App;

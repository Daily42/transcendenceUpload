import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Global, css } from "@emotion/react";
import { Daily } from "./view/viewDaily";
import { Add } from "./view/viewAdd";
import { Root } from "./view/viewRoot";
import { DARK, LIGHT } from "./theme/theme";
import { RootControl } from "./component/rootControl"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Global
        styles={css`
          body {
            background-color: ${darkMode ? DARK.BACKGROUND : LIGHT.BACKGROUND};
          }
          .view {
            background-color: ${darkMode ? DARK.BACKGROUND : LIGHT.BACKGROUND} !important;
          }
        `}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/Daily" element={<Daily />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/" element={<Root darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/*" element={<RootControl />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

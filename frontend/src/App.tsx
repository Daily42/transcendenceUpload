import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { globalStyles } from "./theme/theme";
import { Daily } from "./view/viewDaily";
import { Add } from "./view/viewAdd";
import { Root } from "./view/viewRoot"
import { RootControl } from "./component/rootControl";

function App() {
  globalStyles();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Daily" element={<Daily />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/" element={<Root />} />
        <Route path="/*" element={<RootControl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

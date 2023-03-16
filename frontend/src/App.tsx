import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { globalStyles } from "./theme/theme";
import { Daily } from "./view/viewDaily";
import { RootControl } from "./component/rootControl";

function App() {
  globalStyles();
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/twofactor" element={<Twofactor />} />
        <Route path="/auth/redirect" element={<RedirectTwofactor />} /> */}
        <Route path="/Daily" element={<Daily />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/profile/:userSeq" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/*" element={<RootControl />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

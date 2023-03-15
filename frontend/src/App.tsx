import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { globalStyles } from "./theme/theme";
import { Home } from "./view/viewHome";
import { Daily } from "./view/viewDaily";
import { Game } from "./view/viewGame";
import { Chat } from "./view/viewChat";
import { Profile } from "./view/viewProfile";
import { Watch } from "./view/viewWatch";
import { Login } from "./view/viewLogin";
import { Twofactor } from "./view/viewTwofactor";
import { RedirectTwofactor } from "./view/viewRedirect";
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

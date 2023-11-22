import React from "react";
import Bubbles from "./Bubbles";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import History from "./History";
import Transactions from "./Transactions";
import Settings from "./Settings";
import Advanced from "./Advanced";

export default function Header() {
  return (
    <div>
      <div style={{ background: "#e6e8f7" }}>
        <header>
          <Bubbles />
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/calender" element={<History />}></Route>
            <Route path="/transactions" element={<Transactions />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/advanced" element={<Advanced />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

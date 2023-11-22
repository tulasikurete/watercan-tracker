import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";
// import { Calendar } from 'antd';
import History from "./components/History";
import Transactions from "./components/Transactions";
import Settings from "./components/Settings";
import Header from "./components/Header";
import Advanced from "./components/Advanced";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;

/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Home from "./component/home";
import Regist from "./component/regist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/regist" element={<Regist />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

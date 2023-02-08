/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notice from "./component/Notice";
import Join from "./component/Join";
import Topmenu, { HomeContent } from "./component/Home";
import Login, { LoginBar } from "./component/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <Topmenu />
                <HomeContent />
              </>
            }
          ></Route>
          <Route
            path={"/notice"}
            element={
              <>
                <Topmenu />
                <Notice />
              </>
            }
          ></Route>
          <Route
            path={"/join"}
            element={
              <>
                <Topmenu />
                <Join />
              </>
            }
          ></Route>
          <Route
            path={"/login"}
            element={
              <>
                <Topmenu />
                <Login />
                <LoginBar />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

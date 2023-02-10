/* eslint-disable */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Notice from "./component/Notice";
import Join from "./component/Join";
import Topmenu, { HomeContent } from "./component/Home";
import Login, { LoginBar } from "./component/Login";

function App() {
  // const getApi = async () => {
  //   axios.get("/api/hello").then((res) => console.log(res.data));
  //   axios.get("/api/hi").then((res) => console.log(res.data));
  // };
  // useEffect(() => {
  //   getApi();
  // }, []);
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

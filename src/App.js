/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./component/Posts";
import Topmenu from "./component/Topmenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Topmenu />}></Route>
          <Route
            path={"/notice"}
            element={
              <>
                <Topmenu />
                <Posts />
              </>
            }
          ></Route>
          {/* <Route path={"/join"} element={}></Route>
          <Route path={"/login"} element={}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

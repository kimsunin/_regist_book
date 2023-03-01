/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Join from "./component/Join";
import Board2 from "./component/Board";
import Topmenu, { HomeContent } from "./component/Home";
import Login, { LoginBar } from "./component/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function App() {
  return (
    <div className="App">
      {/* header부분 */}
      <Topmenu />
      {/* body부분 */}
      <>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<HomeContent />}></Route>
            <Route path={"/board/*"} element={<Board2 />}></Route>

            <Route path={"/join"} element={<Join />}></Route>
            <Route
              path={"/login"}
              element={
                <>
                  <Login />
                  <LoginBar />
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;

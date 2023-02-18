/* eslint-disable */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Board, { BoardDetail, BoardRetouch } from "./component/Board";
import Join from "./component/Join";
import Board2, { CreateBoard } from "./component/Board2";
import Topmenu, { HomeContent } from "./component/Home";
import Login, { LoginBar } from "./component/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Topmenu />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomeContent />}></Route>
          <Route path={"/board/*"} element={<Board2 />}></Route>
          <Route
            path={"/board/create"}
            element={
              <>
                <CreateBoard />
              </>
            }
          ></Route>
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
    </div>
  );
}

export default App;

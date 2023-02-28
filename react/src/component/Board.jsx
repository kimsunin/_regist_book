import { Routes, useNavigate } from "react-router-dom";
import React from "react";
import { Route } from "react-router-dom";
import DetailBoard from "./DetailBoard";
import CreateBoard from "./CreateBoard";
import ListBoard from "./ListBoard";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
const headers = { withCredentials: true };
export default function Board2() {
  const movePage = useNavigate();
  return (
    <div>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <ListBoard />
            </>
          }
        ></Route>
        <Route
          path={"detail/*"}
          element={
            <>
              <DetailBoard />
            </>
          }
        ></Route>
        <Route
          path={"create"}
          element={
            <>
              <CreateBoard />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );

  function Post({ board }) {
    function moveDetail() {
      const url = "/board/detail/" + board._id;
      movePage(url);
    }
    return (
      <>
        <li style={{ listStyle: "none" }}>
          <h1 onClick={moveDetail}>제목 : {board.title}</h1>
        </li>
        <hr />
      </>
    );
  }
}

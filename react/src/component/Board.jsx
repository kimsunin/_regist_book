import { Routes, useNavigate } from "react-router-dom";
import React from "react";
import { Route } from "react-router-dom";
import DetailBoard from "./DetailBoard";
import CreateBoard from "./CreateBoard";
import ListBoard from "./ListBoard";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
const headers = { withCredentials: true };
export default function Board2() {
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
}

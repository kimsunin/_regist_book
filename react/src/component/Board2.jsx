import axios from "axios";
import { Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import DetailBoard from "./DetailBoard";
import CreateBoard from "./CreateBoard";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
const headers = { withCredentials: true };
export default function Board2() {
  const movePage = useNavigate();
  const [boards, setBoards] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function getBoards() {
    try {
      setError(null);
      setBoards(null);
      setLoading(true);
      const response = await axios.get("http://www.localhost:4000/board");
      setBoards(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }
  useEffect(() => {
    getBoards();
  }, []);

  if (loading) return <div> 로딩중</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!boards) return null;
  return (
    <div>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <button onClick={() => movePage("create")}>글쓰기</button>

              {boards.map((board, index) => (
                <Post board={board} key={index} />
              ))}
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
      <li>
        <h1 onClick={moveDetail}>제목 : {board.title}</h1>
      </li>
    );
  }
}

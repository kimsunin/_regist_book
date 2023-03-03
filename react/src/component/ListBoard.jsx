import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

// const headers = { withCredentials: true };

export default function ListBoard() {
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
    <>
      <button onClick={() => movePage("create")}>글쓰기</button>
      <hr />
      {boards.map((board, index) => (
        <Post board={board} key={index} />
      ))}
    </>
  );
}

function Post({ board }) {
  const movePage = useNavigate();
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

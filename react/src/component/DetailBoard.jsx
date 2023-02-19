import react from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, useNavigate } from "react-router-dom";

const headers = { withCredentials: true };
export default function DetailBoard() {
  const movePage = useNavigate();

  const [board, setBoards] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function getDetail() {
    const id = window.location.pathname.substring(14);
    const send_param = {
      headers,
      id: id,
    };
    console.log(send_param);
    try {
      setError(null);
      setBoards(null);
      setLoading(true);
      const response = await axios.post(
        "http://www.localhost:4000/board/detail",
        send_param
      );
      setBoards(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }
  useEffect(() => {
    getDetail();
  }, []);
  if (loading) return <div> 로딩중</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!board) return null;
  function edit() {
    console.log("글수정");
  }
  async function remove() {
    const id = window.location.pathname.substring(14);
    const url = "http://www.localhost:4000/board/" + id + "/delete";
    console.log(url);
    console.log(window.location.pathname.substring(14));
    const response = await axios.get(url);
    alert(response.data.message);
    window.location.reload("/board");
  }
  return (
    <>
      {" "}
      <h1>{board.title}</h1>
      <h2>{board.detail}</h2>
      <button onClick={() => movePage("/board")}>글목록</button>
      <button onClick={edit}>글수정</button>
      <button onClick={remove}>글삭제</button>
    </>
  );
}

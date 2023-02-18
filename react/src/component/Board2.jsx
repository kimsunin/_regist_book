import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
const headers = { withCredentials: true };
export default function Board2() {
  const [boards, setBoards] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let videos = [];
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
  const movePage = useNavigate();
  function moveCreate() {
    movePage("/board/create");
  }

  if (loading) return <div> 로딩중</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!boards) return null;
  return (
    <div>
      {boards.map((board, index) => (
        <Post board={board} key={index} />
      ))}
      <button onClick={moveCreate}>글쓰기</button>
    </div>
  );

  function Post({ board }) {
    return (
      <li>
        <h1>title : {board.title}</h1>
        <a>내용 : {board.detail}</a>
      </li>
    );
  }
}
export function CreateBoard() {
  const movePage = useNavigate();
  function moveList() {
    movePage("/board");
  }
  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();

  async function create(e) {
    e.preventDefault();
    const send_param = {
      headers,
      title: title,
      detail: detail,
    };
    const response = await axios
      .post("http://www.localhost:4000/board/write", send_param)
      .then((returnData) => {
        if (returnData.data.message) {
          alert(returnData.data.message);
          movePage("/board");
        } else {
          alert(returnData.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <form method="post" onSubmit={create}>
        <div className="title">
          <input
            type="text"
            name="title"
            placeholder="제목"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="detail">
          <input
            type="text"
            name="detail"
            placeholder="내용"
            value={detail || ""}
            onChange={(e) => setDetail(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="생성"></input>
      </form>
      <button onClick={moveList}>취소</button>
    </>
  );
}

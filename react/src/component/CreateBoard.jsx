import react from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, useNavigate } from "react-router-dom";

const headers = { withCredentials: true };

export default function CreateBoard() {
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

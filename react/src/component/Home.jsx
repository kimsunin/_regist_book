import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

export default function Home() {
  const movePage = useNavigate();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  async function search(e) {
    e.preventDefault();
    const send_param = {
      headers,
      title: title,
      author: author,
    };
    const response = await axios
      .post("http://www.localhost:4000/regist/search", send_param)
      .then((returnData) => {
        if (returnData.data.message) {
          alert(returnData.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="home">
      <form className="search-form" method="post" onSubmit={search}>
        <div className="earch-title">
          <input
            type="text"
            placeholder="제목"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="search-author">
          <input
            type="text"
            placeholder="저자"
            value={author || ""}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="검색"></input>
      </form>
      <button onClick={() => movePage("./regist")}>책등록</button>
    </div>
  );
}

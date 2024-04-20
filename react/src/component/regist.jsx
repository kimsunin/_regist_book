import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const headers = { withCredntials: true };

export default function Regist() {
  const movePage = useNavigate();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  async function regist(e) {
    e.preventDefault();
    const send_param = {
      headers,
      title: title,
      author: author,
    };
    const response = await axios
      .post("http://www.localhost:4000/regist", send_param)
      .then((returnData) => {
        if (returnData.data.message) {
          alert(returnData.data.message);
          movePage("/");
        } else {
          alert(returnData.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="regist">
      <form type="post" onSubmit={regist} className="regist-form">
        <div className="regist-title">
          <input
            type="text"
            placeholder="제목"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="regist-author">
          <input
            type="text"
            placeholder="저자"
            value={author || ""}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="등록"></input>
      </form>
      <button onClick={() => movePage("/")}>취소</button>
    </div>
  );
}

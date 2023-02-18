import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };
export default function Join() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  async function join(e) {
    e.preventDefault();
    const send_param = {
      headers,
      username: username,
      password: password,
      password2: password2,
      email: email,
      name: name,
    };
    const response = await axios
      .post("http://www.localhost:4000/users/join", send_param)
      .then((returnData) => {
        if (returnData.data.message) {
          alert(returnData.data.message);
          window.location.reload();
        } else {
          alert(returnData.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const movePage = useNavigate();
  function moveLogin() {
    movePage("/login");
  }
  return (
    <div className="join">
      <h2>회원가입</h2>
      <form method="post" onSubmit={join}>
        <div id="join-id">
          <span>아이디</span>
          <input
            type="text"
            name="username"
            placeholder="Id"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div id="password">
          <div id="join-password1">
            <span>비밀번호</span>
            <input
              type="text"
              name="password"
              placeholder="p/w"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div id="join-password2">
            <span>비밀번호확인</span>
            <input
              type="text"
              name="password2"
              placeholder="p/w2"
              value={password2 || ""}
              onChange={(e) => setPassword2(e.target.value)}
            ></input>
          </div>
        </div>
        <div id="join-email">
          <span>이메일</span>
          <input
            type="email"
            name="email"
            placeholder="emai"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div id="join-name">
          <span>이름</span>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="join"></input>
      </form>
      <button onClick={moveLogin}>이미아이디가있으신가요?</button>
    </div>
  );
}

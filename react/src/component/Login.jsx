/* eslint-disable */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };
export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  async function login(e) {
    e.preventDefault();
    const send_param = {
      headers,
      username: username,
      password: password,
    };
    const response = await axios
      .post("http://www.localhost:4000/users/login", send_param)
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
  return (
    <div id="loginWrapper">
      <h2>Login</h2>

      <form method="post" onSubmit={login} id="loginForm">
        <input
          type="text"
          name="username"
          placeholder="Id"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label htmlFor="remember-check">
          <input type="checkbox" id="remember-check"></input>
        </label>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
}

export function LoginBar() {
  const movePage = useNavigate();
  function moveLoginFind() {
    movePage("/login/find");
  }
  function moveJoin() {
    movePage("/join");
  }
  return (
    <nav id="loginBar">
      <ul>
        <span>
          <button onClick={moveLoginFind} className="menuLink">
            Find ID/Pw
          </button>
        </span>
        <span>
          <button onClick={moveJoin} className="menuLink">
            Join
          </button>
        </span>
      </ul>
    </nav>
  );
}

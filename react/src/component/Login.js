/* eslint-disable */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handler = (e) => {
    e.preventDefault();
    fetchName();
  };
  const fetchName = async () => {
    const response = await axios.post("http://www.localhost:4000", {
      username,
      password,
    });
  };

  return (
    <div id="loginWrapper">
      <h2>Login</h2>
      <form method="post" onSubmit={handler} id="loginForm">
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

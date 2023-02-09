/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const user = { userName: "a", password: "b" };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      user.userName === e.target[0].value &&
      user.password === e.target[1].value
    ) {
      console.log("로그인되었습니다.");
    } else {
      console.log("로그인 실패");
    }
  }
  return (
    <div id="loginWrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} id="loginForm" action="/">
        <input type="text" name="userName" placeholder="Id"></input>
        <input
          type="password"
          name="userPassword"
          placeholder="Password"
        ></input>
        <label for="remember-check">
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

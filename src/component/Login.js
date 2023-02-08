import React, { useState } from "react";

export default function Login() {
  return (
    <div id="loginWrapper">
      <h2>Login</h2>
      <form method="post" id="loginForm">
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
  return (
    <nav id="loginBar">
      <ul>
        <span>
          <a className="menuLink" href="/login/find">
            Find ID/Pw
          </a>
        </span>
        <span>
          <a className="menuLink" href="/join">
            Join
          </a>
        </span>
      </ul>
    </nav>
  );
}

/* eslint-disable */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//http통신을 위한 설정
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  async function login(e) {
    // e.preventDefault();
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
          window.location.reload("/");
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
      <form method="post" onSubmit={login} id="loginForm">
        <div className="login-id" class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Id
          </label>
          <div class="col-sm-10">
            <input
              className="login-input"
              class="form-control"
              type="text"
              name="username"
              placeholder="Id"
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              className="login-input"
              class="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                ></input>
                <label class="form-check-label" for="gridCheck1">
                  remember
                </label>
              </div>
            </div>
          </div>
          <input class="btn btn-primary" type="submit" value="Login"></input>
        </div>
      </form>
    </div>
  );
}

export function LoginBar() {
  return (
    <nav id="loginBar">
      <ul>
        <span>
          <a href="/login/find">Find ID/Pw</a>
        </span>
        <span>
          <a href="/join">Join</a>
        </span>
      </ul>
    </nav>
  );
}

import axios from "axios";
import React, { useState } from "react";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

export default function Topmenu() {
  const [searchDeail, setSearchDetail] = useState();

  async function search(e) {
    e.preventDefault();
    const send_param = {
      headers,
      detail: searchDeail,
    };
    const response = await axios
      .post("http://www.localhost:4000/board/search", send_param)
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
    <nav id="topMenu">
      <a class="navbar-brand p-0 me-0 me-lg-2" href="/">
        <svg
          fill="current"
          width="50px"
          height="40px"
          viewBox="0 0 36 36"
          version="1.1"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="clr-i-solid clr-i-solid-path-1"
            d="M33,19a1,1,0,0,1-.71-.29L18,4.41,3.71,18.71a1,1,0,0,1-1.41-1.41l15-15a1,1,0,0,1,1.41,0l15,15A1,1,0,0,1,33,19Z"
            fill="white"
          ></path>
          <path
            class="clr-i-solid clr-i-solid-path-2"
            d="M18,7.79,6,19.83V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76Z"
            fill="white"
          ></path>
        </svg>
      </a>
      <div className="search">
        <form className="search-form" method="post" onSubmit={search}>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="search"
              aria-label="Recipient's username"
              value={searchDeail || ""}
              onChange={(e) => setSearchDetail(e.target.value)}
            ></input>
            <button class="btn btn-outline-secondary" type="submit">
              <svg
                fill="white"
                width="20px"
                height="20px"
                viewBox="-2.5 -2.5 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                class="jam jam-search"
              >
                <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav">
        <li style={{ listStyle: "none" }}>
          <a
            className="menuLink"
            href="/board"
            class="nav-link py-2 px-0 px-lg-2 active"
          >
            Board
          </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a
            className="menuLink"
            href="/login"
            class="nav-link py-2 px-0 px-lg-2 active"
          >
            Login
          </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a
            className="menuLink"
            href="/join"
            class="nav-link py-2 px-0 px-lg-2 active"
          >
            Join
          </a>
        </li>
      </ul>
    </nav>
  );
}
export function HomeContent() {
  return <h2>Homepage</h2>;
}

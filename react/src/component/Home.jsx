import axios from "axios";
import React, { useState } from "react";
import "./Home.css";
import homeSvg from "../svg/home.svg";
import searchSvg from "../svg/search.svg";

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
        <img src={homeSvg} alt="home"></img>
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
              <img src={searchSvg} alt="search"></img>
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

import React from "react";

export default function Topmenu() {
  const loggedIn = false;
  if (!loggedIn) {
    return (
      <nav id="topMenu">
        <a class="navbar-brand p-0 me-0 me-lg-2" href="/">
          <svg fill="current" width="50px" height="40px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
              <path class="clr-i-solid clr-i-solid-path-1" d="M33,19a1,1,0,0,1-.71-.29L18,4.41,3.71,18.71a1,1,0,0,1-1.41-1.41l15-15a1,1,0,0,1,1.41,0l15,15A1,1,0,0,1,33,19Z" fill="white"></path><path class="clr-i-solid clr-i-solid-path-2" d="M18,7.79,6,19.83V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76Z" fill="white"></path>
          </svg>
        </a>
        <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav">
          <li style={{ listStyle: "none" }}>
            <a 
            className="menuLink" 
            href="/board" 
            class="nav-link py-2 px-0 px-lg-2 active">
              Board
            </a>
          </li>
          <li style={{ listStyle: "none" }}>
            <a 
            className="menuLink" 
            href="/login" 
            class="nav-link py-2 px-0 px-lg-2 active">
              Login
            </a>
          </li>
          <li style={{ listStyle: "none" }}>
            <a 
            className="menuLink" 
            href="/join" 
            class="nav-link py-2 px-0 px-lg-2 active">
              Join
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export function HomeContent() {
  return <h2>Homepage</h2>;
}

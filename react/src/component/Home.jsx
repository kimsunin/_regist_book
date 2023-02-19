import React from "react";

export default function Topmenu() {
  const loggedIn = false;
  if (!loggedIn) {
    return (
      <nav id="topMenu">
        <ul>
          <li style={{ listStyle: "none" }}>
            <a className="menuLink" href="/">
              Homepage
            </a>
          </li>
          <li style={{ listStyle: "none" }}>
            <a className="menuLink" href="/login">
              Login
            </a>
          </li>
          <li style={{ listStyle: "none" }}>
            <a className="menuLink" href="/join">
              Join
            </a>
          </li>
          <li style={{ listStyle: "none" }}>
            <a className="menuLink" href="/board">
              Board
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

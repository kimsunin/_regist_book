import React, { useState } from "react";

export default function Topmenu() {
  return (
    <nav id="topMenu">
      <ul>
        <li>
          <a className="menuLink" href="/">
            Homepage
          </a>
        </li>
        <li>
          <a className="menuLink" href="/login">
            Login
          </a>
        </li>
        <li>
          <a className="menuLink" href="/join">
            Join
          </a>
        </li>
        <li>
          <a className="menuLink" href="/notice">
            Notice
          </a>
        </li>
      </ul>
    </nav>
  );
}
export function HomeContent() {
  return <h2>Homepage</h2>;
}

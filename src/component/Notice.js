/* eslint-disable */
import React, { useState } from "react";

export function Posts(props) {
  let num = 0;
  let [title, tFun] = useState(["글제목1", "글제목2", "글제목3"]);
  let [context, cFun] = useState(["글내용1", "글내용2", "글내용3"]);
  let [date, dFun] = useState(["날짜1", "날짜2", "날짜3"]);
  let [likes, lFun] = useState(0);

  return (
    <div className="list">
      <h1>
        {title[props.num]}
        <span
          onClick={() => {
            lFun(likes + 1);
          }}
        >
          👍 {likes}
        </span>
      </h1>
      <h2>{context[props.num]}</h2>
      <p>{date[props.num]}</p>
      <hr></hr>
    </div>
  );
}
export default function Notice() {
  let num = 0;
  return (
    <div>
      <Posts num={num++} />
      <Posts num={num++} />
      <Posts num={num++} />
    </div>
  );
}

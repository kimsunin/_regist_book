import { useNavigate } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

export default async function Board() {
  const movePage = useNavigate();
  function movecreate() {
    movePage("/board/create");
  }
  // let videos = [];
  // await axios.get("http://www.localhost:4000/board").then((returnData) => {
  //   videos = returnData.data;
  // });
  // console.log(videos);
  return (
    <>
      <nav className="boardlist">
        <ul></ul>
      </nav>
      {/* <BoardList video={videos} /> */}
      {/* <h1>{videos[0].title}</h1> */}
      <button onClick={movecreate}>글생성</button>
    </>
  );
}
// function Post(props) {
//   console.log("왔다 여기");
//   console.log(props.title);
//   return (
//     <li>
//       <dl>
//         <dt>
//           <a href="board/{:id}">{props.title}</a>
//         </dt>
//       </dl>
//       <dl>
//         <dt>
//           <a href="board/{:id}">{props.detail}</a>
//         </dt>
//       </dl>
//     </li>
//   );
// }

// async function BoardList(props) {
//   console.log("dkfkdsf", props.videos);
//   //   const videoList = videos.map((post) => (
//   //     <Post title={post.title} detail={post.detail} />
//   //   ));
//   return (
//     <>
//       <nav id="boardlist">
//         {/* {videos.map((post) => (
//           <Post title={post.title} detail={post.detail} />
//         ))} */}
//       </nav>
//     </>
//   );
// }

export function BoardDetail() {
  const movePage = useNavigate();
  function moveList() {
    movePage("/board");
  }
  function moveRetouch() {
    movePage("/board/retouch");
  }
  return (
    <>
      <h1>제목</h1>
      <h3>내용</h3>
      <button onClick={moveList}>뒤로</button>
      <button onClick={moveRetouch}>글수정</button>
    </>
  );
}

export function BoardRetouch() {
  const movePage = useNavigate();
  function moveDetail() {
    movePage("/board/detail");
  }
  return (
    <>
      <form method="post">
        <div className="titleretouch">
          <input type="text"></input>
        </div>
        <div className="detailretouch">
          <input type="text"></input>
        </div>
        <input type="submit" value="수정"></input>
      </form>
      <button onClick={moveDetail}>취소</button>
    </>
  );
}

export function CreateBoard() {
  const movePage = useNavigate();
  function moveList() {
    movePage("/board");
  }
  return (
    <>
      <form method="post">
        <div className="title">
          <input type="text" placeholder="제목"></input>
        </div>
        <div className="detail">
          <input type="text" placeholder="내용"></input>
        </div>
        <input type="submit" value="생성"></input>
      </form>
      <button onClick={moveList}>취소</button>
    </>
  );
}

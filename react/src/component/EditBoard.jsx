import { useNavigate } from "react-router-dom";

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

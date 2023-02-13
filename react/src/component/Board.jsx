import { useNavigate } from "react-router-dom";

export default function Board(){
    const movePage = useNavigate()
    function movecreate(){
        movePage("/board/create")
    }
    return(
        <>
        <BoardList />
        <button onClick={ movecreate }>글생성</button>
        </>
    )
}


function BoardList(){
    return(
        <nav className="boardlist">
            <ul>
                <li>
                    <dl>
                        <dt>
                            <a href="board/detail">제목1</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="board/detail">간단내용1</a>
                        </dt>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            <a href="board/detail">제목2</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="board/detail">간단내용2</a>
                        </dt>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            <a href="board/detail">제목3</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="board/detail">간단내용3</a>
                        </dt>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            <a href="board/detail">제목4</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="board/detail">간단내용4</a>
                        </dt>
                    </dl>
                </li>
            </ul>
        </nav>
    )
}

export function BoardDetail(){
    const movePage = useNavigate();
    function moveList(){
        movePage("/board")
    }
    function moveRetouch(){
        movePage("/board/retouch")
    }
    return(
        <>
        <h1>제목</h1>
        <h3>내용</h3>
        <button onClick={ moveList }>뒤로</button>
        <button onClick={ moveRetouch }>글수정</button>
        </>
    )
}

export function BoardRetouch(){
    return(
        <a href="/board/detail">뒤로</a>
    )
}

export function CreateBoard(){
    const movePage = useNavigate();
    function moveList(){
        movePage("/board")
    }
    return(
        <>
        <form method="post">
            <div className="title">
                <input type="text" placeholder="제목">
                </input>
            </div>
            <div> 
                <input className="detail" placeholder="내용">
                </input>
            </div>
            <input type="submit" value="생성"></input>
        </form>
        <button onClick={ moveList }>취소</button>
        </>
    )
}
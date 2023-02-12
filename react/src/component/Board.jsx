import { useState } from "react"
import Topmenu from "./Home"

export default function Board(){
    let clicked=0;
    if(clicked===1){
        return(
            <>
            <CreateBoard/>
            </>
        )
    }
    return(
        <><Topmenu /><BoardList click={clicked}/></>
    )
}

function BoardList(click){
    const [visible, setVisible] = useState(false)
    const handler =()=>{
        click=1;
    }
    return(
        <nav className="boardlist">
            <>
            <ul>
                <li>제목</li>
                <li>제목</li>
                <li>제목</li>
                <li>제목</li>
                <li>제목</li>
            </ul>
                <button onClick={handler}>글생성</button>
            </>
        </nav>
    )
}

// function BoardDetail(){
//     return(
//         <nav className="boarddetail">
//             <ul>
//                 <li>
//                     <span>제목</span>
//                     <span>내용</span>
//                 </li>
//                 <li>
//                     <span>제목</span>
//                     <span>내용</span>
//                 </li>
//                 <li>
//                     <span>제목</span>
//                     <span>내용</span>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// function BoardUpdate()

function CreateBoard(){
    return(
        <form method="post" className="createboard">
            <nav>
                <input>제목</input>
                <input>내용</input>
            </nav>
            <input type="submit">생성</input>
            <button onClick={Board}>취소</button>
        </form>
    )
}


export default function Join(){
    return(
        <div className="join">
             <h2>회원가입</h2>
        <form>
            <div id="join-id">
                <span>아이디</span>
                <input type="text" required maxLength="15" placeholder="id"></input>
            </div>
           <div id="password">
           <div id="join-password1">
                <span>비밀번호</span>
                <input type="password" required maxLength="20" placeholder="password"></input>
            </div>
            <div id="join-password2">
                <span>비밀번호확인</span>
                <input type="password" required maxLength="20" placeholder="passwordagain"></input>
            </div>
           </div>
            <div id="join-email">
                <span>이메일</span>
                <input type="email" required maxLength="20" placeholder="email"></input>
            </div>
            <div id="join-name">
                <span>이름</span>
                <input type="text" required maxLength="10" placeholder="name"></input>
            </div>
            <input type="submit" value="join"></input>
        </form>
        </div>
    )
}
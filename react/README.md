/ ->home page get
/login ->login page get,post
/join ->join page get,post
/logout ->logout page post

/users/logout ->로그아웃 post
/users/:id ->mypage get,post
/users/:id/edit ->mypage정보수정 get,post
/users/admin ->관리자페이지 get
/users/admin/member ->관리자페이지에서 멤버보는 사이트 get
/users/admin/member/:id ->각 멤버 정보
/users/admin/member/delete ->멤버삭제 post
/users/admin

/board/notice ->공지사항
/board/notice/search ->공지사항 검색
/board/notice/upload ->공지사항 업로드
/board/notice/:id/delete ->공지사항 삭제
/board/notice/:id/edit ->공지사항 수정
/board/notice/:id ->공지사항 글1개

/board/free ->자유게시판

2/9해야할일

1. join해서 데이터 저장하기
2. login할때 저장된 데이터 비교해서 로그인 성공, 로그인 실패 확인하기
3. nodejs 서버 구축
   https://ndb796.tistory.com/217
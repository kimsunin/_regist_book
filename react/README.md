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

2/12

1.notice 창 구현
board list, borad add, board detail 2. react-bootscrap 으로 바꾸기 3. 조건에 따라 보여지는 창 다르기 만들기

1. /localhost:5000/boards/getList
   :list 보내주는 기능 만들어줘
2. /boards/add post
   : 난 글 제목,글내용 보내줄게
   {
   title : 글제목
   content : 글내용
   }이렇게 보내줄게
   그러면 추가시켜줘

2/28

1.search 컴포넌트 구현
검색어 입력후 search 버튼 클릭하면 검색어와 일치하는 board들을 가져와서 list 로 보여줌

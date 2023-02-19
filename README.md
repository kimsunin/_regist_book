2/10
현재 client와 서버간의 통신까지 마무리한 상태
login 전송버튼을 누르면 login form 데이터를 서버에 보낼 수 있고
아직 서버에서 로그인 기능을 구현하지는 않았음

나중에 e.preventdefault()를 제거해야되는데 그 방법을 모름

해야될것 -글쓰기 component만들기
이거만들때 react-bootscrap 사용하기

공식사이트 : https://react-bootstrap.github.io/getting-started/introduction/

2/19
문제: 현재 글쓰고 삭제하는 기능을 만들었음 1.근데 중간꺼를 삭제하면 client에서 맨 위에꺼가 삭제됨 이유를 모르겠음 => 해결(mongodb에서 \_id:id로 찾았어야되는데 그냥 id:id로 찾았음) 2.그리고 삭제하거나 글생성하고 바로 랜더링되는게 아니라 내가 새로고침을 해줘야됨
글생성되거나 삭제되면 자동으로 랜더링되도록 고쳐야됨

해야할것:로그인하면 로그인상태유지 쿠키,세션공부
로그인되면 join사라지고 login대신 logout띄어주기
참고사이트 : https://velog.io/@kingth/%EC%84%9C%EB%B2%84-%EC%9D%B8%EC%A6%9D-%EB%B0%A9%EC%8B%9D%EC%84%B8%EC%85%98%EC%BF%A0%ED%82%A4-%ED%86%A0%ED%81%B0

wetube코드보면서 대충 세션을 했는데 정확히 이해 x, 제대로 구현 x 다시만지기

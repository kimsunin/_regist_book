import express from "express";
import cors from "cors"; //다른 포트번호에서 이서버로 post요청을 수락하기
import session from "express-session";
import userRouter from "./routes/userRouter";
import boardRouter from "./routes/boardRouter";
import connect from "./schemas";
const app = express();
connect();
//post전송받은거 설정하기 위해
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));

//post로 만든 데이터를 알아볼 수 있도록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//로그인유지하기위한 session, cookie사용
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "changmin",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use("/users", userRouter);
app.use("/board", boardRouter);
app.listen(4000, () => console.log("✅server is listening!"));

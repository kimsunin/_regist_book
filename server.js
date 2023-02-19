import express from "express";
import cors from "cors"; //다른 포트번호에서 이서버로 post요청을 수락하기
import session from "express-session";
import userRouter from "./routes/userRouter";
import boardRouter from "./routes/boardRouter";
import connect from "./schemas";
import morgan from "morgan";
import MongoStore from "connect-mongo";

const app = express();
//http 요청확인을 위한것
const logger = morgan("dev");
//mongodb와 연결
connect();
//post전송받은거 설정하기 위해
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));

//logger
app.use(logger);
//post로 만든 데이터를 알아볼 수 있도록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//로그인유지하기위한 session, cookie사용
const maxAge = 60 * 1000;
const sessionOpt = {
  secret: "dfsdfsdf",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/test" }),
  cookie: {
    maxAge: maxAge,
    httpOnly: true,
    secure: false,
  },
};
app.use(session(sessionOpt));
// app.use((res, req, next) => {
//   res.locals.loggedIn = Boolean(req.session.loggedIn);
//   res.locals.user = req.session.user;
//   next();
// });

app.use("/users", userRouter);
app.use("/board", boardRouter);
app.listen(4000, () => console.log("✅server is listening!"));

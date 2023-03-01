import express from "express";
import cors from "cors"; //다른 포트번호에서 이서버로 post요청을 수락하기
import userRouter from "./routes/userRouter";
import boardRouter from "./routes/boardRouter";
import connect from "./schemas";
import morgan from "morgan";

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

app.use("/users", userRouter);
app.use("/board", boardRouter);
app.listen(4000, () => console.log("✅server is listening!"));

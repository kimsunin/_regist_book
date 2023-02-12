import express from "express";
import User from "../schemas/user";
const userRouter = express.Router();

async function postLogin(req, res) {
  // const username = req.body.username;
  // const password = req.body.password;
  // if (username === user.username && password === user.password) {
  //   res.json({ message: "로그인성공" });
  // } else {
  //   res.json({ message: "로그인실패" });
  // }

  // const [username, password, password2, email, name] = req.body;
  const user = User.findOne({ username: "Sunin" });
  console.log(user);
}
async function postJoin(req, res) {
  const [username, password, password2, email, name] = req.body;
  const exist = await User.exists({ username });
  if (password !== password2) {
    return res.json({ message: "비밀번호가 일치하지 않습니다" });
  }
  if (exist) {
    return res.json({ message: "이미 존재하는 게정" });
  }
  try {
    await User.create({ username, password, email, name });
    return res.json({ message: "회원가입성공" });
  } catch (err) {
    return res.json({ message: { err } });
  }
}
function postLogout() {
  console.log("postLogout");
}
function postDelete() {
  console.log("postDelete");
}
function postUpdate() {
  console.log("postUpdate");
}
userRouter.post("/join", postJoin);
userRouter.post("/login", postLogin);
userRouter.post("/logout", postLogout);
userRouter.post("/delete", postDelete);
userRouter.post("/update", postUpdate);

export default userRouter;

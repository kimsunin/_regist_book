import express from "express";

const userRouter = express.Router();
const user = {
  username: "changmin",
  password: "1234",
};
function postLogin(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (username === user.username && password === user.password) {
    res.json({ message: "로그인성공" });
  } else {
    res.json({ message: "로그인실패" });
  }
  console.log(username, password, "postJoin");
}
function postJoin() {
  console.log("postLogin");
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

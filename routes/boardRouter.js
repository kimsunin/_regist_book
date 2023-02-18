import express from "express";
import Board from "../schemas/board";
const boardRouter = express.Router();

function postDelete() {
  console.log("postDelete");
}
function postUpdate() {
  console.log("postUpdate");
}
async function postWrite(req, res) {
  const { title, detail } = req.body;
  try {
    await Board.create({ title, detail });
    return res.json({ message: "글쓰기 완료" });
  } catch (err) {
    return res.json({ message: { err } });
  }
}
async function getBoard(req, res) {
  const boards = await Board.find({});
  return res.json(boards);
}
async function postDetail(req, res) {
  const { id } = req.body;
  console.log(id);
  try {
    const board = await Board.findOne({ _id: id });
    console.log(board);
    return res.json(board);
  } catch (err) {
    return res.json({ message: { err } });
  }
}
boardRouter.get("/", getBoard);
boardRouter.post("/delete", postDelete);
boardRouter.post("/update", postUpdate);
boardRouter.post("/write", postWrite);
boardRouter.post("/detail", postDetail);
export default boardRouter;

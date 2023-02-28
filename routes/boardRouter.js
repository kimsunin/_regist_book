import express from "express";
import Board from "../schemas/board";
const boardRouter = express.Router();

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

async function searchDetail(req, res) {
  let { detail } = req.body;
  console.log(detail);
  const regex = (pattern) => new RegExp(`.*${pattern}.*`);
  const detailRegex = regex(detail);
  try {
    let boards = await Board.findOne({ detail: { $regex: detailRegex } });
    console.log(boards.detail);
    return res.json({ message: "내용이 존재" });
  } catch (err) {
    return res.json({ message: "내용이 존재하지 않음" });
  }
}

async function deleteBoard(req, res) {
  try {
    await Board.deleteOne({ _id: req.params.id });
    return res.json({ message: "삭제되었습니다" });
  } catch (err) {
    return res.json({ message: { err } });
  }
}
async function editBoard(req, res) {
  console.log("수정합니다");
}
boardRouter.get("/", getBoard);
boardRouter.post("/update", postUpdate);
boardRouter.post("/write", postWrite);
boardRouter.post("/detail", postDetail);
boardRouter.post("/search", searchDetail);
boardRouter.get("/:id([0-9a-f]{24})/delete", deleteBoard);
boardRouter.get("/:id([0-9a-f]{24})/edit", editBoard);

export default boardRouter;

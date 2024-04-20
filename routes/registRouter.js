import express from "express";
import Book from "../schemas/book";
import Board from "../schemas/book";
const registRouter = express.Router();

async function postRegist(req, res) {
  const { title, author } = req.body;
  try {
    await Book.create({ title, author });
    return res.json({ message: "등록완료" });
  } catch (err) {
    return res.json({ message: { err } });
  }
}

async function postSearch(req, res) {
  let { title, author } = req.body;
  console.log(title);
  console.log(author);
  const regex = (pattern) => new RegExp(`.*${pattern}.*`);
  const titleRegex = regex(title);
  try {
    let books = await Book.findOne({ title: { $regex: titleRegex } });
    console.log(books.title);
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

registRouter.post("/search", postSearch);
registRouter.post("/", postRegist);

export default registRouter;

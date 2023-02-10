import express from "express";

const boardRouter = express.Router();

function postDelete() {
  console.log("postDelete");
}
function postUpdate() {
  console.log("postUpdate");
}
function postWrite() {
  console.log("postWrite");
}

boardRouter.post("/delete", postDelete);
boardRouter.post("/update", postUpdate);
boardRouter.post("/write", postWrite);

export default boardRouter;

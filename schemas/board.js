import mongoose, { model, Schema } from "mongoose";

const boardSchema = new Schema({
  title: {
    type: String,
  },
  detail: {
    type: String,
  },
});
const Board = mongoose.model("Board", boardSchema);
export default Board;

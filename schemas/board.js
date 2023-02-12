import mongoose, { model, Schema } from "mongoose";

const boardSchema = new Schema({});
const Board = mongoose.model("Board", boardSchema);
export default Board;

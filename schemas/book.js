import mongoose, { model, Schema } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
});
const Book = mongoose.model("Book", bookSchema);
export default Book;

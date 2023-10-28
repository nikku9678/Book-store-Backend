// const mongoose = require("mongoose");
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    author: {
      type: String,
      required: [true, "author is required"],
    },
    publishYear: {
      type: Number,
      required: [true, "password is required"],
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);

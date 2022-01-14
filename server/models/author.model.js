const { Schema, model } = require("mongoose");

const authorSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    quote: String,
    img_url: String,
  },
  {
    timestamps: true,
  }
);

const Author = model("Author", authorSchema);

module.exports = Author;

import { Schema, model } from "mongoose";

const cinema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

export const Cinema = model("Cinema", cinema);

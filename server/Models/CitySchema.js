import { Schema, model } from "mongoose";

const city = new Schema({
  city_name: {
    type: String,
    require: true,
    unique: true,
  },
  cinema_name: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cinema",
    },
  ],
});

export const City = model("City", city);

import { Schema, model } from "mongoose";

const city = new Schema({
  city_name: {
    type: String,
    require: true,
    unique: true,
  },
});

export const City = model("City", city);



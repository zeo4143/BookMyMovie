import { Schema, model } from "mongoose";

const shows = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    require: true,
  },

  date: {
    type: String,
    require: true,
  },

  time: {
    type: String,
    require: true,
  },

  venue: {
    type: Schema.Types.ObjectId,
    ref: "Cinema",
    require: true,
  },

  audiNo: {
    type: Number,
    require: true,
  },

  language: {
    type: String,
    require: true,
  },
  ticketsId: {
    type: Schema.Types.ObjectId,
    ref: "Tickets",
    require: true,
  },
});

export const Shows = model("Shows", shows);

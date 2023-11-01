import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { movies } from "./Routers/movies.js";

//Variables
const app = express();
const PORT = 8080;
const URI = "mongodb+srv://zeo4143:Rafi4143@bookmymovie.h9ppcer.mongodb.net/";

//middleWares
app.use(cors());
app.use(express.json());

//routes
movies(app)

//Mongoose Connection
connect(URI).then(() => {
  console.log("Connected To DB");

  app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server connected to PORT ${PORT}`);
  });
});

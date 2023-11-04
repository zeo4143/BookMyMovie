import {} from "dotenv/config.js";
import express from "express";
import cors from "cors";
import { dirname, join } from "path"
import { connect } from "mongoose";
import { movies } from "./Routers/movies.js";

//Variables
const app = express();
const __fileName = new URL(import.meta.url).pathname
const __dirname = dirname(__fileName)
const imagePath = join(__dirname, 'LocalServer')
const PORT = process.env.PORT ||  8080;
const URI = process.env.MONGO_URI;

//middleWares
app.use(cors());
app.use(express.json());

//routes
movies(app)

//setting Images path
app.use('/images', express.static(imagePath))

//Mongoose Connection
connect(URI).then(() => {
  console.log("Connected To DB");

  app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server connected to PORT ${PORT}`);
  });
});

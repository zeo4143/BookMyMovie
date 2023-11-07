import { Movie } from "../Models/MoviesSchema.js";

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.json(movies);
  } catch (error) {
    res.status(404).json("Something went wrong..Try Again");
  }
};


//POST

const postNewMovie = async (req, res) => {
  try {
    //Extracting the form data
    const data = req.body;
    data.images = req.files.map((file) => file.filename);

    //creating and uploading new movie object
    const movie = new Movie(data);
    const uploadedMovie = await movie.save();

    res.status(201).json(uploadedMovie);
  } catch (error) {
    res.status(500).json({ error: "Failed to save the Movie" });
  }
};

export { getAllMovies, postNewMovie };

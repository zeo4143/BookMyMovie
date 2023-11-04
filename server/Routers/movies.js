import { getAllMovies, getSpecificMovie, postNewMovie } from "../Controllers/moviesController.js"
import { uploadImages } from "../MiddleWares/Multer.js"

const movies = (routes) => {
    
    //GET
    routes.get("/movies", getAllMovies)
    routes.get("/movie/:movieName", getSpecificMovie)

    //POST
    routes.post("/postMovie", uploadImages.array('images', 5), postNewMovie)
}

export {movies}
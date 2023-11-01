import { getAllMovies, postNewMovie } from "../Controllers/moviesController.js"
import { uploadImages } from "../MiddleWares/Multer.js"

const movies = (routes) => {
    
    //GET
    routes.get("/movies", getAllMovies)

    //POST
    routes.post("/postMovie", uploadImages.array('images', 5), postNewMovie)
}

export {movies}
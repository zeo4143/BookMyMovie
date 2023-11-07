import { getMoviesByCity } from "../Controllers/MoviesController/Getter.js"
import { getAllMovies, postNewMovie } from "../Controllers/moviesController.js"
import { uploadImages } from "../MiddleWares/Multer.js"

const movies = (routes) => {
    
    //GET
    routes.get("/movie/all", getAllMovies)
    routes.get("/movie/:city", getMoviesByCity)

    //POST
    routes.post("/movie/post", uploadImages.array('images', 2), postNewMovie)
}

export {movies}
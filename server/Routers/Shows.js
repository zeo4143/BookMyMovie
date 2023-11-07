import { getShowsByMovieInCity } from "../Controllers/ShowsController/Getter.js"
import { createShow } from "../Controllers/ShowsController/Setter.js"


const shows = (routes) => {

    //GET
    routes.get("/shows/:city/:movieId/:language/:date", getShowsByMovieInCity)

    //POST
    routes.post("/createShow/:theatreId", createShow)
}

export {shows}
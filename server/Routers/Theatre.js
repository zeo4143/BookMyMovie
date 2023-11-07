import { getAllTheatres } from "../Controllers/TheatresController/Getter.js"
import { registerTheatre } from "../Controllers/TheatresController/Setter.js"


const theatres = (routes)=> {

    routes.get("/theatre", getAllTheatres)

    routes.post("/register/theatre/:cinema", registerTheatre)

}

export {theatres}
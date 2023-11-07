import { getAllCinemas } from "../Controllers/CinemaController/Getter.js"
import { registerCinema } from "../Controllers/CinemaController/Setter.js"


const cinema = (routes) => {

    //Get
    routes.get("/cinema", getAllCinemas)

    //POST
    routes.post("/register/cinema", registerCinema)
}

export {cinema}


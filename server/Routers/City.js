import { getAllCities, getSingleCity } from "../Controllers/CityController/Getter.js"
import { registerCity } from "../Controllers/CityController/Setter.js"


const city = (routes) => {

    //Get
    routes.get("/city", getAllCities)
    routes.get("/city/:city", getSingleCity)


    routes.post("/register/city", registerCity)
}

export { city }
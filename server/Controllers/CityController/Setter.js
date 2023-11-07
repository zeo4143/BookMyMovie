import { City } from "../../Models/CitySchema.js"


const registerCity = async (req, res) => {
    
    const data = req.body

    try {

        const response = new City(data)
        const createCity = await response.save()
        res.status(200).json(createCity)
    

    } catch (error) {
        res.status(400).json({error : "City Already exists in the DataBase"})
    }
}

export {registerCity}
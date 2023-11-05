import { City } from "../../Models/CitySchema.js"


const getAllCities = async (req, res) => {
    
    try {
        
        const cities = await City.find() 
        res.status(200).json(cities)
        
    } catch (error) {
        res.status(400).json({error})
    }
}

const getSingleCity = async (req, res) => {
    
    const data = req.params
 
    try {
        const {city} = data
        const cityExists = await City.findOne({city_name : city})

        if(!cityExists) {
            throw Error("City Not Found")
        }

        res.status(200).json(cityExists)
    } catch (error) {
        res.status(400).json({error : error.message })
    }
}

export {getAllCities, getSingleCity}
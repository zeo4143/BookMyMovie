import { Cinema } from "../../Models/CinemasSchema.js"


const getAllCinemas = async (req, res) => {
    
    try {

        const response = await Cinema.find()

        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}

export {getAllCinemas}
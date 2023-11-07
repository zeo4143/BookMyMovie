import { Theatre } from "../../Models/TheatresSchema.js"


const getAllTheatres = async (req, res) => {

    try {
        const response = await Theatre.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}

export {getAllTheatres}
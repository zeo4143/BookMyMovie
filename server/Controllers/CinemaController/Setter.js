import { Cinema } from "../../Models/CinemasSchema.js";


const registerCinema = async (req, res) => {
    const data = req.body
    try {

        const cinemaDetails = new Cinema(data)
        const response = await cinemaDetails.save()

        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error);
    }
}

export {registerCinema}
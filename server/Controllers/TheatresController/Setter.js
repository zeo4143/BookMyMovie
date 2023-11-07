import { Theatre } from "../../Models/TheatresSchema.js"


const registerTheatre = async (req, res) => {
    const data = req.body
    const {cinema} = req.params

    try {

        // const findCity = await City.findOne({city_name: city}).then(city => city._id)
        const theatre = {...data, cinema: cinema}
        const createTheater = new Theatre(theatre)
        const response = await createTheater.save()
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({error : "Theatre Not creted"})
    }
}

export {registerTheatre}
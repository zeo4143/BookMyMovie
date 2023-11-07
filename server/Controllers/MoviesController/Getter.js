import { Movie } from "../../Models/MoviesSchema.js"
import { Shows } from "../../Models/ShowsSchema.js"
import { Theatre } from "../../Models/TheatresSchema.js"


const getMoviesByCity = async (req, res) => {
    
    const {city} = req.params
    console.log(city);

    try {
        const getTheatres = await Theatre.find({city : city}).select('_id').exec()
        console.log(getTheatres);
        const getdistinctMovies =  await Shows.distinct("name", { venue: { $in: getTheatres } }).exec();
        console.log(getdistinctMovies);
        const getMovies = await Movie.find({_id : {$in : getdistinctMovies}}).exec()
    
        res.status(200).json(getMovies)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export {getMoviesByCity}
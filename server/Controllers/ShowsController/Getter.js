import mongoose from "mongoose";
import { Shows } from "../../Models/ShowsSchema.js";
import { Theatre } from "../../Models/TheatresSchema.js";

const getShowsByMovieInCity = async (req, res) => {
  const { movieId, language, city, date } = req.params;

  try {
    const getTheatreIds = await Theatre.find({ city: city })
      .distinct("_id")
      .exec();
    console.log(getTheatreIds);
    const getShows = await Shows.aggregate([
      {
        $match: {
          name: new mongoose.Types.ObjectId(movieId),
          language: language,
          date : date,
          venue: { $in: getTheatreIds },
        },
      },
      {
        $group: {
          _id: {
            theatreId: "$venue",
          },
          timings: {
            $push: {
              time: "$time",
              ticketRef: "$ticketsId",
              audiNo: "$audiNo",
            },
          },
        },
      },
      {
        $project: {
          theatreDetails: "$_id.theatreId",
          timings: 1,
          _id: 0,
        },
      },
    ]).exec();

    const response = await Theatre.populate(getShows, {
      path: "theatreDetails",
      select: { _id: 0, name: 1, address: 1 },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getShowsByMovieInCity };

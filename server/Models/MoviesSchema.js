import { Schema, model } from "mongoose";


const movie = new Schema(
    {
        title : {
            type : String,
            require : true,
            unique : true,
        },
        description : {
            type : String,
            require : true
        },
        screenTime : {
            type : String,
            require : true
        },
        language : [String],
        genre : [String],
        images : [String],
    }
)

export const Movie = model("Movie", movie)


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
        movieType : {
            type :String,
            require :true
        },
        screenTime : {
            type : String,
            require : true
        },
        language : [String],
        genre : [String],
        images : [String],
        videoURL : {
            type : String,
            require : true
        }
    }
)

export const Movie = model("Movie", movie)


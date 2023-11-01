import { Schema, model } from "mongoose";


const cinema = new Schema(
    {
        name : {
            type : String,
            require : true
        },

        Seats : {
            rows : {
                type : Number,
                require : true
            },
            columns : {
                type : String,
                require : true
            }
        },   

        address : {
            type : String,
            require : true
        },

        city : {
            type : String,
            require : true
        }
    }
)

export const Cinema = model("Cinema", cinema)
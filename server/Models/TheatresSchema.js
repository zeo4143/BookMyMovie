import { Schema, model } from "mongoose";


const theatre = new Schema(
    {
        name : {
            type : String,
            require : true
        },
        address : {
            type : String,
            require : true
        },
        city : {
            type : Schema.Types.ObjectId,
            require : true
        },
        cinema : {
            type : Schema.Types.ObjectId,
            require : true
        },
        audis : [{
            audiNo : {
                type : Number,
                require : true
            },
            rows :  {
                type : Number,
                require : true
            },
            columns :  {
                type : Number,
                require : true
            }
        }]

    }
)

export const Theatre = model("Theatre", theatre)
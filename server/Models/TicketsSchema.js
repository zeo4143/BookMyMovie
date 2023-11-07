import { Schema, model } from "mongoose";


const tickets = new Schema(
    {
        price : {
            type : Number,
            require : true
        },
        seats : [{
            row : {
                type : Number,
                require : true
            },
            colNo : {
                type : Number,
                require : true
            },
            availability : {
                type : Boolean,
                default : true
            }
        }]
    }
)

export const Tickets = model("Tickets", tickets)
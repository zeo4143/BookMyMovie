import { Shows } from "../../Models/ShowsSchema.js"
import { Theatre } from "../../Models/TheatresSchema.js"
import { Tickets } from "../../Models/TicketsSchema.js"


const createShow = async (req, res) => {
    const data = req.body
    console.log(data);
    const {theatreId} = req.params

    try {
        const getTheatre = await Theatre.findById({_id : theatreId}) 
        const getAudidetails = getTheatre.audis.find(audiNo => audiNo.audiNo == data.audiNo)
        console.log(getAudidetails);
        const {rows, columns} = getAudidetails
        
        let tickets = []

        for(let row = 1; row <= rows; row++) {
            for(let col = 1; col <= columns; col++) {
                const ticket = {
                    rowNo : row,
                    colNo : col,
                } 
                tickets.push(ticket)
            }
        }
        const createTickets = new Tickets({price : data.price, seats: tickets})
        const saveTickets = await createTickets.save()

        const newShow = {...data, venue: theatreId, ticketsId : saveTickets._id}
        const createNewShow = new Shows(newShow)
        const saveShow = await createNewShow.save()

        res.status(200).json({
            show : saveShow,
            tickets : saveTickets
        })

    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

export {createShow}
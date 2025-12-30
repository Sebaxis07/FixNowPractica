import mongoose, { Schema } from "mongoose";

interface ITicketEvent {
    ticketId: string;
    event: string;
    timestamp: Date;
}

const TicketEventSchema: Schema<ITicketEvent> = new Schema({
    ticketId: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
})

export default mongoose.model<ITicketEvent>('TicketEvent', TicketEventSchema)
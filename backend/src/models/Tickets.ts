import mongoose, { Schema } from "mongoose";

interface ITicket {
    title: string;
    description: string;
    status: string;
    priority: string;
    category: string;
    assignedTo: string;
    assignedBy: string;
    createdAt: Date;
    updatedAt: Date;
}

const TicketSchema: Schema<ITicket> = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    assignedBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
})

export default mongoose.model<ITicket>('Ticket', TicketSchema)
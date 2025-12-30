import mongoose, { Schema } from "mongoose";

interface IMessage {
    ticketId: string;
    message: string;
    sender: string;
    timestamp: Date;
}

const MessageSchema: Schema<IMessage> = new Schema({
    ticketId: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
})

export default mongoose.model<IMessage>('Message', MessageSchema)
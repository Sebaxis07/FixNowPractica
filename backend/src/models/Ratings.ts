import mongoose, { Schema } from "mongoose";

interface IRating {
    ticketId: string;
    rating: number;
    comment: string;
    sender: string;
    timestamp: Date;
}

const RatingSchema: Schema<IRating> = new Schema({
    ticketId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
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

export default mongoose.model<IRating>('Rating', RatingSchema)

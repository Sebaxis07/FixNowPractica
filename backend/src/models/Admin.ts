import mongoose, { Schema } from "mongoose";

interface IAdmin {
    handler: string;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    direccion: string;
    password: string;
}

const AdminSchema: Schema<IAdmin> = new Schema({
    handler: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.model<IAdmin>('Admin', AdminSchema)

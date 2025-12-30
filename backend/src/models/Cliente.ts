import mongoose, { Schema } from "mongoose";


interface ICliente {
    handler: string;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    direccion: string;
    password: string;
}

const ClienteSchema: Schema<ICliente> = new Schema({
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

export default mongoose.model<ICliente>('Cliente', ClienteSchema)

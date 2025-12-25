import mongoose, { Schema } from "mongoose";


interface ITecnico {
    id_tecnico: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    direccion: string;
    password: string;
    especialidad: string;
}


const TecnicoSchema: Schema<ITecnico> = new Schema({
    id_tecnico: {
        type: Number,
        required: true,
        unique: true
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
    },
    especialidad: {
        type: String,
        required: true
    }
})

export default mongoose.model<ITecnico>('Tecnico', TecnicoSchema)
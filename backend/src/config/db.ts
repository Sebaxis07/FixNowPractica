import mongoose from "mongoose";

export const MongoDB = async () => {
    try {
        const URL = process.env.MONGODB_URL;

        if (!URL) {
            throw new Error('MONGODB_URL is not defined in environment variables. Please check your .env file.');
        }

        const conexion = await mongoose.connect(URL);
        console.log('Conectado a MongoDB');
        console.log(`Host: ${conexion.connection.host}, en el puerto ${conexion.connection.port}`);
        console.log(`APIREST FUNCIONANDO: http://${process.env.IP_SERVER}:${process.env.PORT}${process.env.API_VERSION}`)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}



export default MongoDB


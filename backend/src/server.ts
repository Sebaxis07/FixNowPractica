import express from "express";
import 'dotenv/config'
import router from "./router.ts";
import { MongoDB } from "./config/db.ts";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Static Folder
app.use(express.static('uploads'))


//CORS
app.use(cors());

MongoDB()
app.use('/api/v1', router)


export default app;
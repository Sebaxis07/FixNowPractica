import express from "express";
import 'dotenv/config'
import router from "./router.ts";
import { MongoDB } from "./config/db.ts";

const app = express();

app.use(express.json())
MongoDB()
app.use('/api/v1', router)


export default app;
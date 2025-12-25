import { Router } from "express";
import ClienteSchema from "./models/Cliente.ts";
const router = Router();

//Auth Register y Login
router.post('/auth/register', async (req, res) => {
    await ClienteSchema.create(req.body)
})
router.get('/auth/login', (req, res) => {
    res.send('login')
})


export default router;

import { Router } from "express";

const router = Router();

//Auth Register y Login
router.post('/auth/register', (req, res) => {
    res.send('register')

    console.log(req.body)
})
router.get('/auth/login', (req, res) => {
    res.send('login')
})


export default router;

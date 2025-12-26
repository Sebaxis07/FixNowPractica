import { Router } from "express";
import { createAccountClient, createAccountTecnico } from "./handlers/index.ts";

const router = Router();

//Auth Register y Login Cliente
router.post('/auth/register/cliente', createAccountClient)
router.get('/auth/login/cliente', (req, res) => {
    res.send('login')
})

//Auth Register y Login Tecnico
router.post('/auth/register/tec', createAccountTecnico)
router.get('/auth/login/tec', (req, res) => {

})


export default router;

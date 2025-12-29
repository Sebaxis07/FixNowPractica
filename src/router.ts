import { Router } from "express";
import { body } from 'express-validator'
import { createAccountClient, createAccountTecnico } from "./handlers/index.ts";

const router = Router();

//Auth Register y Login Cliente
router.post('/auth/register/cliente',
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('handler').isLength({ min: 6 }),
    body('handler').not().isEmpty(),
    body('nombre').isLength({ min: 6 }),
    body('apellido').isLength({ min: 6 }),
    body('telefono').isLength({ min: 6 }),
    body('direccion').isLength({ min: 6 }),
    createAccountClient)
router.get('/auth/login/cliente', (req, res) => {
    res.send('login')
})

//Auth Register y Login Tecnico
router.post('/auth/register/tec', createAccountTecnico,
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('handler').isLength({ min: 6 }),
    body('handler').not().isEmpty(),
    body('nombre').isLength({ min: 6 }),
    body('apellido').isLength({ min: 6 }),
    body('telefono').isLength({ min: 6 }),
    body('direccion').isLength({ min: 6 }),
)
router.get('/auth/login/tec', (req, res) => {

})


export default router;

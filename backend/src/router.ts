import { Router } from "express";
import { body } from 'express-validator'
import { createAccountClient, createAccountTecnico, loginClient, loginTecnico } from "./handlers/index.ts";
import { handleInputError } from "../middleware/validation.ts";
import { generateToken } from "./utils/jwt.ts";
const router = Router();

//Auth Register y Login Cliente
router.post('/auth/register/cliente',
    body('email').isEmail().withMessage('Email invalido'),
    body('password').isLength({ min: 6 }).withMessage('Password invalido'),
    body('handler').isLength({ min: 6 }).withMessage('Handler invalido'),
    body('handler').not().isEmpty().withMessage('Handler invalido'),
    body('nombre').isLength({ min: 6 }).withMessage('Nombre invalido'),
    body('apellido').isLength({ min: 6 }).withMessage('Apellido invalido'),
    body('telefono').isLength({ min: 6 }).withMessage('Telefono invalido'),
    body('direccion').isLength({ min: 6 }).withMessage('Direccion invalida'),
    handleInputError,
    createAccountClient)
router.post('/auth/login/cliente',
    body('email').isEmail(),
    body('password').isLength({ min: 6 }).isEmpty(),
    loginClient)


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
router.post('/auth/login/tec',
    body('email').isEmail(),
    body('password').isLength({ min: 6 }).isEmpty(),
    loginTecnico)


export default router;

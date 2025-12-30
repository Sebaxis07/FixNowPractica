import { Router } from "express";
import { body } from 'express-validator'
import { createTicket } from "../handlers/index.ts";
import { handleInputError } from "../middleware/validation.ts";
const router = Router();

router.post('/ticket',
    body('title').isLength({ min: 6 }).withMessage('Titulo invalido'),
    body('description').isLength({ min: 6 }).withMessage('Descripcion invalida'),
    body('status').isLength({ min: 6 }).withMessage('Estado invalido'),
    body('priority').isLength({ min: 6 }).withMessage('Prioridad invalida'),
    body('category').isLength({ min: 6 }).withMessage('Categoria invalida'),
    body('assignedTo').isLength({ min: 6 }).withMessage('Asignado a invalido'),
    body('assignedTo').isLength({ min: 6 }).withMessage('Asignado a invalido'),
    handleInputError,
    createTicket)
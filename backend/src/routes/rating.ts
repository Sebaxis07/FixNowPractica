import { Router } from "express";
import { body } from 'express-validator'
import { createTicket } from "../handlers/index.ts";
import { handleInputError } from "../middleware/validation.ts";
const router = Router();

router.post('/rating',
    body('rating').isLength({ min: 6 }).withMessage('Rating invalido'),
    body('comment').isLength({ min: 6 }).withMessage('Comentario invalido'),
    handleInputError,
    createRating)
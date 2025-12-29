import ClienteSchema from "../models/Cliente.ts";
import TecnicoSchema from "../models/Tecnico.ts";
import { validationResult } from "express-validator";

import express from "express";
import type { Request, Response } from 'express';
import slug from 'slug';
import bcrypt from 'bcrypt';
import { encrypt } from '../utils/auth.ts';

export const createAccountClient = async (req: Request, res: Response) => {

    //manejo de errores
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    const { email, password } = req.body;
    const encryptedPassword = encrypt(password);
    const cliente = await ClienteSchema.findOne({ email });
    if (cliente) {
        return res.status(400).json({ msg: 'Cliente ya existe' })
    }
    const handler = slug(req.body.handler, '')
    const handlerExist = await ClienteSchema.findOne({ handler });
    if (handlerExist) {
        return res.status(400).json({ msg: 'Handler ya existe' })
    }

    await ClienteSchema.create({ ...req.body, password: encryptedPassword })
    res.json({ msg: 'Cliente creado' })
}

export const createAccountTecnico = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const encryptedPassword = encrypt(password);
    const tecnico = await TecnicoSchema.findOne({ email });
    if (tecnico) {
        return res.status(400).json({ msg: 'Tecnico ya existe' })
    }
    const handler = slug(req.body.handler, '')
    const handlerExist = await TecnicoSchema.findOne({ handler });
    if (handlerExist) {
        return res.status(400).json({ msg: 'Handler ya existe' })
    }
    await TecnicoSchema.create({ ...req.body, password: encryptedPassword })
    res.json({ msg: 'Tecnico creado' })
}


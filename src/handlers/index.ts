import ClienteSchema from "../models/Cliente.ts";
import TecnicoSchema from "../models/Tecnico.ts";
import express from "express";
const { Request, Response } = express;

export const createAccountClient = async (req: Request, res: Response) => {
    await ClienteSchema.create(req.body)
    res.json({ msg: 'Cliente creado' })
}

export const createAccountTecnico = async (req: Request, res: Response) => {
    await TecnicoSchema.create(req.body)
    res.json({ msg: 'Tecnico creado' })
}
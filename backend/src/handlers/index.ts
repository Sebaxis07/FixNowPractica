import ClienteSchema from "../models/Cliente.ts";
import TecnicoSchema from "../models/Tecnico.ts";
import express from "express";
import type { Request, Response } from 'express';
import slug from 'slug';
import bcrypt from 'bcrypt';
import { encrypt } from '../utils/auth.ts';
import AdminSchema from "../models/Admin.ts";
import { generateToken } from '../utils/jwt.ts';

export const createAccountClient = async (req: Request, res: Response) => {




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

export const createAccountAdmin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const encryptedPassword = encrypt(password);
    const admin = await AdminSchema.findOne({ email });
    if (admin) {
        return res.status(400).json({ msg: 'Admin ya existe' })
    }
    const handler = slug(req.body.handler, '')
    const handlerExist = await AdminSchema.findOne({ handler });
    if (handlerExist) {
        return res.status(400).json({ msg: 'Handler ya existe' })
    }
    await AdminSchema.create({ ...req.body, password: encryptedPassword })
    res.json({ msg: 'Admin creado' })
}

export const loginClient = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const cliente = await ClienteSchema.findOne({ email });
    if (!cliente) {
        return res.status(400).json({ msg: 'Cliente no encontrado' })
    }
    const isMatch = await bcrypt.compare(password, cliente.password);
    if (!isMatch) {
        return res.status(400).json({ msg: 'Password incorrecto' })
    }
    const token = generateToken({ id: cliente._id, handler: cliente.handler, role: 'cliente' });
    res.json({ msg: 'Cliente logueado', token })
}

export const loginTecnico = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const tecnico = await TecnicoSchema.findOne({ email });
    if (!tecnico) {
        return res.status(400).json({ msg: 'Tecnico no encontrado' })
    }
    const isMatch = await bcrypt.compare(password, tecnico.password);
    if (!isMatch) {
        return res.status(400).json({ msg: 'Password incorrecto' })
    }
    const token = generateToken({ id: tecnico._id, handler: tecnico.handler, role: 'tecnico' });
    res.json({ msg: 'Tecnico logueado', token })
}

export const loginAdmin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const admin = await AdminSchema.findOne({ email });
    if (!admin) {
        return res.status(400).json({ msg: 'Admin no encontrado' })
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        return res.status(400).json({ msg: 'Password incorrecto' })
    }
    const token = generateToken({ id: admin._id, handler: admin.handler, role: 'admin' });
    res.json({ msg: 'Admin logueado', token })
}

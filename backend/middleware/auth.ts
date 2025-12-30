import type { AuthRequest } from '../types/types';
import type { Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ msg: 'No token provided' });
    }
    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ msg: 'Invalid token' });
    }
}

export const authorizeRoles = (...allowedRoles: Array<'cliente' | 'tecnico' | 'admin'>) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ msg: 'No autenticado' });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ msg: 'No tienes permisos para acceder a este recurso' });
        }

        next();
    };
};
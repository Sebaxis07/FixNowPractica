import type { Request } from 'express';

export type AuthRequest = Request & {
    user: {
        id: string;
        handler: string;
        role: 'cliente' | 'tecnico' | 'admin'
    }
}

import jwt from 'jsonwebtoken'

interface IJwt {
    id: string;
    handler: string;
    role: 'cliente' | 'tecnico' | 'admin'
}

export const generateToken = (user: IJwt) => {
    return jwt.sign(user, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' })
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET || 'secret')
}

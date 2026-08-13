import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { Role } from '@prisma/client';
export type AuthRequest = Request & { user?: { id: string; role: Role } };
export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Authentication required' });
  try { req.user = jwt.verify(token, process.env.JWT_SECRET!) as { id: string; role: Role }; next(); }
  catch { return res.status(401).json({ message: 'Invalid or expired token' }); }
}
export function requireRole(...roles: Role[]) { return (req: AuthRequest, res: Response, next: NextFunction) => roles.includes(req.user!.role) ? next() : res.status(403).json({ message: 'Insufficient permissions' }); }

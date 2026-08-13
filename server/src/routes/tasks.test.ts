import { describe, it, expect } from 'vitest';
import jwt from 'jsonwebtoken';
describe('auth token contract',()=>{it('signs a token with RBAC claims',()=>{const t=jwt.sign({id:'u1',role:'STUDENT'},'test-secret');const p=jwt.verify(t,'test-secret') as any;expect(p.id).toBe('u1');expect(p.role).toBe('STUDENT')})});

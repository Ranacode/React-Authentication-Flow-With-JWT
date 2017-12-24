import { Router } from 'express';
import jwt from 'jsonwebtoken';
import * as UserControllers from './controllers';
import { UserRoutes } from '../index';

// UTILS
export function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'UNAUTHORIZED, TOKEN IS EMPTY' });
  }
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, 'SECRETKEY', (error, userData) => {
    if (error) return res.status(422).json({ error });
    req.user = userData;
    next();
  });
}

const router = new Router();

router.get('/user/publications', verifyToken, UserControllers.getUserPublications);
router.post('/user/login', UserControllers.loginUser);
export default router;

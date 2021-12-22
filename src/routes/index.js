import { Router } from 'express';
import VerifyToken from '../middleware/usuarios.middleware';
import {
  getAll, createUser, deleteUser, updateUser,
} from '../controllers/usuario.controller';
import { requestLogin } from '../models/usuario.model';

const routes = new Router();
routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'conected' });
});

routes.get('/usuario', VerifyToken, getAll);

routes.get('/login', requestLogin);

routes.post('/usuario', VerifyToken, createUser);

routes.delete('/usuario/:id', VerifyToken, deleteUser);

routes.put('/usuario/:id', VerifyToken, updateUser);

export default routes;

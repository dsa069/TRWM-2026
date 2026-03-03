import { Router } from 'express';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  healthCheck,
} from '../controllers/apiController';

const router = Router();

// Health check
router.get('/health', healthCheck);

// Rutas CRUD de usuarios
router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
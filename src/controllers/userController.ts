import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

// GET /users - Obtener todos los usuarios
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find().select('-password');
    res.render('users/index', {
      title: 'Usuarios - TWM-2026',
      users,
    });
  } catch (error) {
    res.status(500).render('error', { message: 'Error al obtener usuarios' });
  }
};

// GET /users/:id - Obtener usuario por ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params['id']).select('-password');
    if (!user) {
      res.status(404).render('error', { message: 'Usuario no encontrado' });
      return;
    }
    res.render('users/detail', { title: user.name, user });
  } catch (error) {
    res.status(500).render('error', { message: 'Error al obtener el usuario' });
  }
};
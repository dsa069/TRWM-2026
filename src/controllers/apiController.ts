import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

// GET /api/users
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find().select('-password');
    res.json({ success: true, data: users, count: users.length });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
};

// POST /api/users
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role } = req.body as IUser;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ success: false, message: 'El email ya está registrado' });
      return;
    }

    const user = new User({ name, email, password, role });
    await user.save();

    res.status(201).json({
      success: true,
      message: 'Usuario creado correctamente',
      data: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al crear usuario' });
  }
};

// PUT /api/users/:id
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndUpdate(req.params['id'], req.body, {
      new: true,
      runValidators: true,
    }).select('-password');

    if (!user) {
      res.status(404).json({ success: false, message: 'Usuario no encontrado' });
      return;
    }

    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al actualizar usuario' });
  }
};

// DELETE /api/users/:id
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params['id']);
    if (!user) {
      res.status(404).json({ success: false, message: 'Usuario no encontrado' });
      return;
    }
    res.json({ success: true, message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al eliminar usuario' });
  }
};

// GET /api/health
export const healthCheck = (_req: Request, res: Response): void => {
  res.json({
    success: true,
    message: 'API TWM-2026 funcionando correctamente',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
};
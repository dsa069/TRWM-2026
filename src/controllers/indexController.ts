import { Request, Response } from 'express';

export const getIndex = (req: Request, res: Response): void => {
  res.render('index', {
    title: 'TWM-2026 - MEAN Stack App',
    description: 'Aplicación web móvil con tecnología MEAN Stack',
  });
};

export const getAbout = (req: Request, res: Response): void => {
  res.render('about', {
    title: 'Acerca de - TWM-2026',
  });
};
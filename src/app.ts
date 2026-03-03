import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

// Importar rutas
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import apiRouter from './routes/api';

// Importar configuración de base de datos
import { connectDB } from './config/database';

const app: Application = express();

// Conectar a MongoDB
connectDB();

// Configuración del motor de vistas
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// Middlewares
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// Manejo de errores 404
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(err);
});

// Manejador de errores global
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  res.status(res.statusCode === 200 ? 500 : res.statusCode);
  res.locals['message'] = err.message;
  res.locals['error'] = req.app.get('env') === 'development' ? err : {};
  res.render('error');
});

export default app;
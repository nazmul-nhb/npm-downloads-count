import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { IErrorObject } from './types/interfaces';
import packageRoutes from './routes/package';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 4242;

// Set the path to the views folder
app.set('views', path.join(__dirname, 'views'));

// Set View Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (_req: Request, res: Response) => {
	res.status(200).send({ success: true, message: '🏃 Server is Running!' });
});

// Actual Routes
app.use('/package', packageRoutes);

// Error handler for 404
app.use((_req: Request, _res: Response, next: NextFunction) => {
	const error: IErrorObject = new Error('Requested URL Not Found!');
	error.status = 404;
	next(error);
});

// Final/Global Error Handler
app.use(
	(error: IErrorObject, _req: Request, res: Response, _next: NextFunction) => {
		console.error('🔴 Error: ' + error.message);
		res.status(error.status || 500).send({
			success: false,
			message: error.message || 'Internal Server Error!',
		});
	},
);

// Start the Server
const startServer = async () => {
	app.listen(port, () => {
		console.log('🟢 Server is Running on Port: ', port);
	});
};

// Call startServer
startServer().catch(console.dir);

export default app;

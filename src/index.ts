import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ErrorObject } from "./types/interfaces";
import packageRoutes from "./routes/package";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 4242;

// Use IIFE to start the Server
(async () => {
	try {
		// Middlewares
		app.use(cors());
		app.use(express.json());

		// Routes
		app.get("/", async (req: Request, res: Response) => {
			res.send("Server is Running!");
		});

		// Actual Routes
		app.use("/package", packageRoutes);

		// Error handler for 404
		app.use((_req: Request, _res: Response, next: NextFunction) => {
			const error: ErrorObject = new Error("Requested URL Not Found!");
			error.status = 404;
			next(error);
		});

		// Final error handler
		app.use(
			(
				error: ErrorObject,
				_req: Request,
				res: Response,
				_next: NextFunction
			) => {
				console.error(error);
				res.status(error.status || 500).send({
					success: false,
					message: error.message || "Internal Server Error!",
				});
			}
		);

		// Start the server
		app.listen(port, () => {
			console.log("Server is Running on Port: ", port);
		});
	} catch (error) {
		console.error("Failed to Start the Server: ", error);
		// process.exit(1);
	}
})();

export default app;

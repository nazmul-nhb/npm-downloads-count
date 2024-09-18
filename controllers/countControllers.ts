import { Request, Response, NextFunction } from "express";
import { fetchDownloadsCount } from "../helpers/fetchDownloads";

// Get Downloads Count for NPM Package
export const getDownloadsCount = async (
	req: Request<{  }, {name:string, startDate:string}, {}>,
	res: Response,
	next: NextFunction
) => {
	try {
		const startDate = "1970-01-01";

		const packageName = "@nazmul-nhb/id-generator";

		const endDate = new Date().toISOString().split("T")[0];

		const url = `https://api.npmjs.org/downloads/point/${startDate}:${endDate}/${packageName}`;

		const data = await fetchDownloadsCount(url);

		const { downloads } = JSON.parse(data);

		res.send({ success: true, packageName, downloads });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error Getting Downloads Count: ", error.message);
			res.status(400).send({
				success: false,
				message: error.message,
			});
		} else {
			next(error);
		}
	}
};

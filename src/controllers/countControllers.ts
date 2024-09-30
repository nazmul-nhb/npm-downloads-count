import { Request, Response, NextFunction } from 'express';
import { fetchDownloadsCount } from '../helpers/fetchDownloadsCount';
import { fetchPackageDetails } from '../helpers/fetchPackageDetails';

// Get Downloads Count for NPM Package
export const getDownloadsCount = async (
	req: Request<
		{},
		{},
		{},
		{ packageName?: string; startDate?: string; endDate?: string }
	>,
	res: Response,
	next: NextFunction,
) => {
	try {
		const defaultStartDate = '1970-01-01',
			defaultPackageName = '@nazmul-nhb/id-generator',
			defaultEndDate = new Date().toISOString().split('T')[0],
			providedBy = 'Nazmul Hassan';

		const {
			packageName = defaultPackageName,
			startDate = defaultStartDate,
			endDate = defaultEndDate,
		} = req.query;

		const url = `https://api.npmjs.org/downloads/point/${startDate}:${endDate}/${packageName}`;

		const { authorName, authorEmail } =
			await fetchPackageDetails(packageName);

		const { downloads } = await fetchDownloadsCount(url);

		const pkgData = {
			success: true,
			packageName,
			authorName,
			authorEmail,
			startDate,
			endDate,
			downloads,
			providedBy,
		};

		// Check if the request explicitly asks for JSON
		if (req.rawHeaders?.includes('application/json')) {
			return res.status(200).json(pkgData);
		}

		// Otherwise, render EJS view
		return res.render('downloads', {
			data: pkgData,
			startDate: startDate || '1970-01-01',
			endDate: endDate || new Date().toISOString().split('T')[0],
		});
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error Getting Downloads Count: ', error.message);
			res.status(400).send({
				success: false,
				message: error.message,
			});
		} else {
			next(error);
		}
	}
};

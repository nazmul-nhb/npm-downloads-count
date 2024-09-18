import https from "https";
import { IPackageDetails } from "../types/interfaces";

// Helper function to get package details
export const fetchPackageDetails = (packageName: string): Promise<IPackageDetails> => {
	return new Promise((resolve, reject) => {
		const url = `https://registry.npmjs.org/${packageName}`;

		https
			.get(url, (response) => {
				let data = "";

				response.on("data", (chunk) => {
					data += chunk;
				});

				response.on("end", () => {
					try {
						const packageData = JSON.parse(data);
						const authorName: string =
							packageData.author?.name || "Unknown Author!";
						const authorEmail: string =
							packageData.author?.email || "Email Not Provided!";
						resolve({ authorName, authorEmail, packageData });
					} catch (err) {
						reject("Failed to Parse Package Data!");
					}
				});

				response.on("error", (err) => {
					reject(err);
				});
			})
			.on("error", (err) => {
				reject(err);
			});
	});
};

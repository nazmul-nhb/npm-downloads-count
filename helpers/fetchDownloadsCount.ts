import https from "https";
import { IDownloadsData } from "../types/interfaces";

// Helper function to wrap https.get() in a promise
export const fetchDownloadsCount = (url: string): Promise<IDownloadsData> => {
	return new Promise((resolve, reject) => {
		https
			.get(url, (response) => {
				let data = "";

				response.on("data", (chunk) => {
					data += chunk;
				});

				response.on("end", () => {
					const parsedData: IDownloadsData = JSON.parse(data);
					resolve(parsedData);
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

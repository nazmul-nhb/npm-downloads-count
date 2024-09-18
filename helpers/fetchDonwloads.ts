import https from "https";

// Helper function to wrap https.get() in a promise
export const fetchDownloadsCount = (url: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		https
			.get(url, (response) => {
				let data = "";

				response.on("data", (chunk) => {
					data += chunk;
				});

				response.on("end", () => {
					resolve(data);
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

import https from "https";

// Helper function to wrap https.get() in a promise
export const fetchPackageDetails = (packageName: string): Promise<any> => {
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
						const authorName =
							packageData.author?.name || "Unknown Author!";
						const authorEmail =
							packageData.author?.email || "Email Not Provided!";
						resolve({ authorName, authorEmail, packageData });
					} catch (err) {
						reject("Failed to Parse Package Data");
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

export interface ErrorObject extends Error {
	status?: number;
}

export interface IPackageDetails {
	authorName: string;
	authorEmail: string;
	packageData: any;
}

export interface IDownloadsData {
	downloads: number;
	start: string;
	end: string;
	package: string;
}

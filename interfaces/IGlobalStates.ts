// ========== IGlobalStates
// import all modules
import { IPortofolios } from './IPortofolios';

export interface IGlobalStates {
	auth: {
		accessToken: string;
		refreshToken: string
	},
	authTemporary: {
		accessToken: string;
		refreshToken: string
	},
	articles: {
		articles: IPortofolios[]
	},
}

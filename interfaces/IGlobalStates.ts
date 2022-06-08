// ========== IGlobalStates

export interface IGlobalStates {
	auth: {
		accessToken: string;
		refreshToken: string
	},
	authTemporary: {
		accessToken: string;
		refreshToken: string
	}
}

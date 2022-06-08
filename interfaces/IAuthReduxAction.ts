// ========== Auth Redux Action

export interface IAuthReduxAction {
	type: 'SET_TOKEN' | 'SET_TOKEN_TEMPORARY',
	payload: {
		data: {
			accessToken: string;
			refreshToken: string;
		}
	}
}

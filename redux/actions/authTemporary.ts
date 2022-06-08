// ========== Auth Temporary Actions
// import all modules
import { SetTokenFunc } from '../../types';

export const setTokenTemporary: SetTokenFunc = (accessToken: string, refreshToken: string) => ({
  type: 'SET_TOKEN_TEMPORARY',
  payload: {
    data: {
      accessToken,
      refreshToken,
    },
  },
});

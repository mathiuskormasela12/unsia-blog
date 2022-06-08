// ========== Auth Actions
// import all modules

import { SetTokenFunc } from '../../types/SetTokenFunc';

export const setToken: SetTokenFunc = (accessToken: string, refreshToken: string) => ({
  type: 'SET_TOKEN',
  payload: {
    data: {
      accessToken,
      refreshToken,
    },
  },
});

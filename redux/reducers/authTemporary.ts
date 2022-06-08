// ========== Auth Temporary Reducer
// import all modules
import { IAuthGlobalStates, IAuthReduxAction } from '../../interfaces';

const initialStates: IAuthGlobalStates = {
  accessToken: '',
  refreshToken: '',
};

const authTemporaryReducer = (
  states: IAuthGlobalStates = initialStates,
  action: IAuthReduxAction,
): IAuthGlobalStates => {
  switch (action.type) {
    case 'SET_TOKEN_TEMPORARY': {
      return {
        ...states,
        accessToken: action.payload.data.accessToken,
        refreshToken: action.payload.data.refreshToken,
      };
    }

    default: {
      return {
        ...states,
      };
    }
  }
};

export default authTemporaryReducer;

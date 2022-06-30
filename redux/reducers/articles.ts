// ========== Articles Reducer
// import all modules
import { IArticlesGlobalStates, IArticlesReduxAction } from '../../interfaces';

const initialStates: IArticlesGlobalStates = {
  articles: [],
};

const articlesReducer = (
  states: IArticlesGlobalStates = initialStates,
  action: IArticlesReduxAction,
): IArticlesGlobalStates => {
  switch (action.type) {
    case 'SET_ARTICLES': {
      return {
        ...states,
        articles: action.payload.data.articles,
      };
    }

    default: {
      return {
        ...states,
      };
    }
  }
};

export default articlesReducer;

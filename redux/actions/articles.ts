// ========== Articles Actions
// import all modules
import { IPortofolios } from '../../interfaces';
import { SetArticlesFunc } from '../../types';

export const setArticles: SetArticlesFunc = (data: IPortofolios[]) => ({
  type: 'SET_ARTICLES',
  payload: {
    data: {
      articles: data,
    },
  },
});

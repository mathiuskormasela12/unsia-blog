// ========== Articles Redux Action
// import all modules
import { IPortofolios } from './IPortofolios';

export interface IArticlesReduxAction {
	type: 'SET_ARTICLES',
	payload: {
		data: {
			articles: IPortofolios[];
		}
	}
}

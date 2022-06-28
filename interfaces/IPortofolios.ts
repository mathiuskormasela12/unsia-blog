// ========== IPortofolios
// import all modules
import { ITechnology } from './ITechnology';

export interface IPortofolios {
	id: number;
	title: string;
	description: string;
	img: string;
	technologies: ITechnology[];
}

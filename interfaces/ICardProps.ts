// ========== ICardProps
// import all modules
import { ITechnology } from './ITechnology';

export interface ICardProps {
	title: string;
	description: string;
	img: string;
	technologies: ITechnology[];
}

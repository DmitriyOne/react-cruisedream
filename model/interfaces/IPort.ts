import { IImage } from './IImage'

export interface ICurrentPortPage {
	id: number;
	title: string;
	titleContent: string;
	gallery: IImage[];
	cityTitle: string;
	cityContent: string;
	advicesContent: string;
}

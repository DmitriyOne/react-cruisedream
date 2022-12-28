export interface ICard {
	id: number
	src?: string
	alt?: string
	title?: string
	date?: string
	subtitle?: string
	isSubtitleIndent?: boolean;
	isSubtitleJustify?: boolean
	tags?: string
	learnMoreHref?:string
	href?: string
}

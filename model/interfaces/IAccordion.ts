export interface IAccordionBody {
	text: string
}

export interface IAccordion {
	title: string
	body: IAccordionBody[]
	href?: string
}

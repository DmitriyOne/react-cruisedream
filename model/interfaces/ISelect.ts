export interface ISelect {
	label: string
	value: string
	tag: string
}

export interface ISelectGroup {
	label: string
	options: ISelect[]
	tag: string
}

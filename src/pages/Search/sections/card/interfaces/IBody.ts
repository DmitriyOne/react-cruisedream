import { ICruiseRoute, IIncludedIcon } from '../../../../../model/interfaces'

export interface IBody {
	id: string
	logo: string
	days: number
	cruiseName: string
	datepicker: string
	otherDates?: string[]
	shipName: string
	routes: ICruiseRoute[]
	icons: IIncludedIcon[]
}

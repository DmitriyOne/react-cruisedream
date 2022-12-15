import { ICruiseOption, IExtraTitle, IIncludedTitle } from '../../model/interfaces'
import { iconIncludedCruise1, iconIncludedCruise2, iconIncludedCruise3 } from './data-included-icons'

const includedTitle: IIncludedTitle[] = [
	{ title: 'title included 1' },
	{ title: 'title included 2' },
	{ title: 'title included 3' },
	{ title: 'title included 4' },
]

const extraTitle: IExtraTitle[] = [
	{ title: 'title extra 1' },
	{ title: 'title extra 2' },
	{ title: 'title extra 3' },
	{ title: 'title extra 4' },
]

export const DataOptions: ICruiseOption = {
	icons: iconIncludedCruise1,
	included: includedTitle,
	extra: extraTitle
}

export const DataOptions2: ICruiseOption = {
	icons: iconIncludedCruise2,
	included: includedTitle,
	extra: extraTitle
}

export const DataOptions3: ICruiseOption = {
	icons: iconIncludedCruise3,
	included: includedTitle,
	extra: extraTitle
}

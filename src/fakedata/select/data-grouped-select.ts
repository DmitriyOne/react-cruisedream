import { ISelectGroup } from '../../model/interfaces'

import { differentOptions } from './data-different-select'
import { otherOptions } from './data-other-select'
import { popularOptions1, popularOptions2 } from './data-popular-select'

export const groupedOptions: ISelectGroup[] = [
	{
		label: 'Популярное',
		options: popularOptions1,
		tag: 'popular',
	},
	{
		label: 'Разное',
		options: otherOptions,
		tag: 'other1'
	},
	{
		label: 'Другие',
		options: differentOptions,
		tag: 'other2'
	}
]

export const groupedOptions2: ISelectGroup[] = [
	{
		label: 'Популярное',
		options: popularOptions2,
		tag: 'popular',
	},
	{
		label: 'Другие',
		options: differentOptions,
		tag: 'other1'
	},
	{
		label: 'Разное',
		options: otherOptions,
		tag: 'other2'
	},
]

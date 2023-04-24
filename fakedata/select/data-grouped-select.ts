/* eslint-disable max-len */
import { ISelectGroup } from '@crdr/interfaces'

import { differentCompany, differentLiners,differentPortEnd, differentPortIntermediate, differentPortStart, differentRegion, differentTypeCruise } from './data-different-select'
import { otherCompany, otherLiners,otherPortEnd, otherPortIntermediate, otherPortStart, otherRegion } from './data-other-select'
import { popularCompany, popularLiners,popularPortEnd, popularPortIntermediate, popularPortStart, popularRegions, popularTypeCruise } from './data-popular-select'

export const groupedRegion: ISelectGroup[] = [
	{ label: 'Популярное', options: popularRegions, tag: 'popular' },
	{ label: 'Разное', options: otherRegion, tag: 'other' },
	{ label: 'Другие', options: differentRegion, tag: 'different' },
]

export const groupedCompany: ISelectGroup[] = [
	{ label: 'Популярное', options: popularCompany, tag: 'popular' },
	{ label: 'Разное', options: otherCompany, tag: 'other' },
	{ label: 'Другие', options: differentCompany, tag: 'different' },
]

export const groupedPortStart: ISelectGroup[] = [
	{ label: 'Популярное', options: popularPortStart, tag: 'popular' },
	{ label: 'Разное', options: otherPortStart, tag: 'other' },
	{ label: 'Другие', options: differentPortStart, tag: 'different' },
]

export const groupedPortIntermediate: ISelectGroup[] = [
	{ label: 'Популярное', options: popularPortIntermediate, tag: 'popular' },
	{ label: 'Разное', options: otherPortIntermediate, tag: 'other' },
	{ label: 'Другие', options: differentPortIntermediate, tag: 'different' },
]

export const groupedPortEnd: ISelectGroup[] = [
	{ label: 'Популярное', options: popularPortEnd, tag: 'popular' },
	{ label: 'Разное', options: otherPortEnd, tag: 'other' },
	{ label: 'Другие', options: differentPortEnd, tag: 'different' },
]

export const groupedLiners: ISelectGroup[] = [
	{ label: 'Популярное', options: popularLiners, tag: 'popular' },
	{ label: 'Разное', options: otherLiners, tag: 'other' },
	{ label: 'Другие', options: differentLiners, tag: 'different' },
]

export const groupedTypeCruise: ISelectGroup[] = [
	{ label: 'Популярное', options: popularTypeCruise, tag: 'popular' },
	{ label: 'Другие', options: differentTypeCruise, tag: 'different' },
]

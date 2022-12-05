import { useContext } from 'react'

import { SearchFiltersContext } from '../../context'

import { Filters, Selected, Sort } from './sections'

export const SearchPage = () => {
	const { isSelected } = useContext(SearchFiltersContext)

	return (
		<>
			<Filters />
			{isSelected && <Selected />}
			<Sort />
		</>
	)
}

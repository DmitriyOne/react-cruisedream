import { useContext } from 'react'

import { SearchFiltersContext } from '../../context'

import { Filters, Main, Selected } from './sections'

export const SearchPage = () => {
	const { isSelected } = useContext(SearchFiltersContext)

	return (
		<>
			<Filters />
			{isSelected && <Selected />}
			<Main />
		</>
	)
}

import { useContext } from 'react'
import { FiltersSelected } from '../../components/Filters'
import { StickySearchPage } from '../../components/Sticky'

import { SearchFiltersContext } from '../../context'

import { Filters, Main } from './sections'

export const SearchPage = () => {
	const { isSelected } = useContext(SearchFiltersContext)

	return (
		<>
			<Filters />
			{isSelected && <StickySearchPage />}
			<Main />
		</>
	)
}

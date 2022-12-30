import { useContext } from 'react'

import { SearchFiltersContext } from '../../context'

import { Filters } from '../../components'
import { Banner } from '../../components/RepeaterBlocks'
import { StickySearchPage } from '../../components/Sticky'

import { Main } from './sections'

export const SearchPage = () => {
	const { isSelected } = useContext(SearchFiltersContext)

	return (
		<>
			<Filters />
			{isSelected && <StickySearchPage />}
			<Main />
			<Banner />
		</>
	)
}

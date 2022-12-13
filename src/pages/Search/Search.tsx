import { useContext } from 'react'

import { Banner, Filters } from '../../components'
import { StickySearchPage } from '../../components/Sticky'

import { SearchFiltersContext } from '../../context'

import {  Main } from './sections'

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

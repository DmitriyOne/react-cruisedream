import { useContext } from 'react'
import { SearchFiltersContext } from '../../context'
import { Form } from './sections'

import { SelectedFilters } from './sections/form/selected-filters/selectedFilters'

export const SearchPage = () => {
	const { isSelected } = useContext(SearchFiltersContext)

	return (
		<>
			<Form />
			{isSelected && <SelectedFilters />}
		</>
	)
}

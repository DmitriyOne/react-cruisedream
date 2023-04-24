import { useContext } from 'react'

import { SearchSelectorsContext } from '@crdr/context'

import { BannerDefault, Filters, StickySearchPage } from '@crdr/components'

import { Main } from './sections'

export const SearchPage = () => {
	const { isSelectedOptions } = useContext(SearchSelectorsContext)

	return (
		<>
			<Filters />
			{isSelectedOptions && <StickySearchPage />}
			<Main />
			<BannerDefault />
		</>
	)
}

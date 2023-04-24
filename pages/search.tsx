import { SearchPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const Search = () => {
	return (
		<>
			<DynamicHeadTitle pageTitle="Поиск" />
			<DynamicHeadDesc pageDescription="Это страница поиска круиза." />

			<SearchPage />
		</>
	)
}

export default Search

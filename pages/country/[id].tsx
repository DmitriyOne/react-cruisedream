import { CurrentCountryPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const CurrentCountry = () => {

	return (
		<>
			<DynamicHeadTitle />
			<DynamicHeadDesc pageDescription="Это страница выбранной страны круиза" />
			<CurrentCountryPage />
		</>
	)
}

export default CurrentCountry

import { CurrentCompanyPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const CurrentCompany = () => {

	return (
		<>
			<DynamicHeadTitle />
			<DynamicHeadDesc pageDescription="Это страница выбранной компании" />

			<CurrentCompanyPage />
		</>
	)
}

export default CurrentCompany

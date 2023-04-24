import { AllCountryPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const Companies = () => {
	return (
		<>
			<DynamicHeadTitle pageTitle="Страны" />
			<DynamicHeadDesc pageDescription="Это страница всех скидок стран." />

			<AllCountryPage />
		</>
	)
}

export default Companies

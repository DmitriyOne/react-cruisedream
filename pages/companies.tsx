import { AllCompanyPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const Companies = () => {
	return (
		<>
			<DynamicHeadTitle pageTitle="Компании" />
			<DynamicHeadDesc pageDescription="Это страница всех компаний." />

			<AllCompanyPage />
		</>
	)
}

export default Companies

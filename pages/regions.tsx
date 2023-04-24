import { AllRegionsPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const Regions = () => {
	return (
		<>
			<DynamicHeadTitle pageTitle="Регионы" />
			<DynamicHeadDesc pageDescription="Это страница всех регионов." />

			<AllRegionsPage />
		</>
	)
}

export default Regions

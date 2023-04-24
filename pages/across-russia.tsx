import { AcrossRussiaPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const AcrossRussia = () => {
	return (
		<>
			<DynamicHeadTitle pageTitle="По России" />
			<DynamicHeadDesc />
			<AcrossRussiaPage />
		</>
	)
}

export default AcrossRussia

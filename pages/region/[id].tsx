import { CurrentRegionPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

export const CurrenRegion = () => {
	return (
		<>
			<DynamicHeadTitle />
			<DynamicHeadDesc pageDescription="Это страница выбранного региона" />

			<CurrentRegionPage />
		</>
	)
}

export default CurrenRegion

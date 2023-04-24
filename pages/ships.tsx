import { AllShipsPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const Ships = () => {
	return (
		<>
			<DynamicHeadTitle pageTitle="Корабли" />
			<DynamicHeadDesc pageDescription="Это страница всех кораблей." />

			<AllShipsPage />
		</>
	)
}

export default Ships

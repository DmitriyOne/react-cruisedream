import { CurrentShipPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

export const CurrenShip = () => {

	return (
		<>
			<DynamicHeadTitle />
			<DynamicHeadDesc pageDescription="Это страница выбранного корабля" />
			<CurrentShipPage />
		</>
	)
}

export default CurrenShip

import { CurrentCruisePage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

export const CurrenCruise = () => {

	return (
		<>
			<DynamicHeadTitle />
			<DynamicHeadDesc pageDescription="Это страница выбранного круиза" />

			<CurrentCruisePage />
		</>
	)
}

export default CurrenCruise

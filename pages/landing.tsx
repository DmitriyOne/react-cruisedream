import { LandingPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const Landing = () => {
	return (
		<>
			<DynamicHeadTitle pageTitle="Лендинг" />
			<DynamicHeadDesc pageDescription="Это страница лендинга." />

			<LandingPage />
		</>
	)
}

export default Landing

import { AllPortPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const Ports = () => {
	return (
		<>
			<DynamicHeadTitle pageTitle="Порты" />
			<DynamicHeadDesc pageDescription="Это страница всех портов." />

			<AllPortPage />
		</>
	)
}

export default Ports

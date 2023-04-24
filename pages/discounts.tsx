import { AllDiscountsPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const Discounts = () => {
	return (
		<>
			<DynamicHeadTitle pageTitle="Скидки" />
			<DynamicHeadDesc pageDescription="Это страница всех скидок на разные круизы." />

			<AllDiscountsPage />
		</>
	)
}

export default Discounts

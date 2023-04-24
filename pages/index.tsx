import { NextPage } from 'next'
import { HomePage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const Home: NextPage = () => {

	return (
		<>
			<DynamicHeadTitle pageTitle="NextJS" />
			<DynamicHeadDesc />

			<HomePage />
		</>
	)
}

export default Home

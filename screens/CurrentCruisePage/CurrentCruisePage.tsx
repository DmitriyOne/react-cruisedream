/* eslint-disable max-len */
import { useWindowSize } from '@crdr/hooks'

import { Ship } from '@crdr/components'

import { Cabins, Dates, FAQ, Header, Options, Overview, Route, TermsAndCond, ToBook, YourCruise } from './sections'

export const CurrentCruisePage = () => {
	const { isMobile } = useWindowSize()
	return (
		<>
			{!isMobile && <Header />}
			<Overview />
			<Ship />
			<Route />
			<Options />
			<ToBook />
			<Dates />
			<Cabins />
			<YourCruise />
			<FAQ />
			<TermsAndCond />
		</>
	)
}

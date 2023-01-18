/* eslint-disable max-len */
import { useWindowSize } from '../../hooks'
import { Ship } from '../../components/Ship'

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

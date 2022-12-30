/* eslint-disable max-len */
import { useWindowSize } from '../../hooks'

import { Cabins, Dates, FAQ, Header, Options, Overview, Route, Ship, TermsAndCond, ToBook, YourCruise } from './sections'

export const CurrentCruisePage = () => {
	const { isMobile } = useWindowSize()

	const isShow = !isMobile
	return (
		<>
			{isShow && <Header />}
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

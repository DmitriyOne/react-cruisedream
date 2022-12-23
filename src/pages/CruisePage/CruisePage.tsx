import { useWindowSize } from '../../hooks'

import { Cabins, Dates, FAQ, Header, Options, Overview, Route, Ship, TermsAndCond, ToBook } from './sections'

export const CruisePage = () => {
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
			<FAQ />
			<TermsAndCond />
		</>
	)
}

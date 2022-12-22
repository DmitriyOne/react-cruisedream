import { useEffect, useState } from 'react'

import { useWindowSize } from '../../hooks'
import { ICruise } from '../../model/interfaces'

import { FAQ, Header, Options, Overview, Route, Ship, TermsAndCond, ToBook } from './sections'

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
			<FAQ />
			<TermsAndCond />
		</>
	)
}

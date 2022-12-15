import { useEffect, useState } from 'react'

import { DataSingleCruise } from '../../fakedata'

import { useWindowSize } from '../../hooks'
import { ICruise } from '../../model/interfaces'

import { Header, Overview } from './sections'

export const CruisePage = () => {
	const [cruise, setCruise] = useState<ICruise>(DataSingleCruise)
	const { isMobile } = useWindowSize()

	useEffect(() => {
		setCruise(DataSingleCruise)
	}, [])

	const isShow = !isMobile
	return (
		<>
			{isShow && <Header />}
			<Overview
				cruiseName={cruise.cruiseName}
				id={cruise.id}
				label={cruise.label}
				days={cruise.days}
				logo={cruise.logo}
				datepicker={cruise.datepicker}
				otherDates={cruise.otherDates}
				shipName={cruise.shipName}
				cruiseRoute={cruise.cruiseRoute}
				icons={cruise.icons}
				isSale={cruise.isSale}
				sale={cruise.sale}
			/>
		</>
	)
}

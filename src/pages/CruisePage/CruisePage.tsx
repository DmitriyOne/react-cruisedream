import { useEffect, useState } from 'react'


import { DataSingleCruise } from '../../fakedata'

import { useWindowSize } from '../../hooks'
import { ICruise } from '../../model/interfaces'

import { Header, Options, Overview, Ship, ToBook } from './sections'

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
				shipName={cruise.ship.name}
				cruiseRoute={cruise.cruiseRoute}
				icons={cruise.options.icons}
				isSale={cruise.isSale}
				sale={cruise.sale}
			/>
			<Ship
				shipName={cruise.ship.name}
				shipImages={cruise.ship.images}
				shipYear={cruise.ship.year}
				shipCapacity={cruise.ship.capacity}
				shipWeight={cruise.ship.weight}
				shipTeam={cruise.ship.team}
				shipDescription={cruise.ship.description}
				shipLinks={cruise.ship.links}
			/>
			<Options
				includedTitles={cruise.options.included}
				extraTitles={cruise.options.extra}
			/>
			<ToBook
				shipName={cruise.ship.name}
				deadline={cruise.deadline!}
			/>
		</>
	)
}

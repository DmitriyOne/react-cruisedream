import { FC } from 'react'

import { Container } from '../../../../components'
import { IShipImage, IShipLinks } from '../../../../model/interfaces'

import { Description } from './description/description'
import { Slider } from './slider/slider'

import styles from './ship.module.scss'
import { useWindowSize } from '../../../../hooks'

interface IProps {
	shipName: string
	shipYear: number
	shipCapacity: number
	shipWeight: number
	shipTeam: number
	shipDescription: string
	shipImages: IShipImage[]
	shipLinks: IShipLinks[]
}

export const Ship: FC<IProps> = ({ ...cruise }) => {
	const { isTablet } = useWindowSize()

	const direction = isTablet ? 'columnReverse' : 'row'
	return (
		<Container width="full" className={styles.component}>
			<Container width="containerXl" align="stretch" direction={direction}>
				<Description
					name={cruise.shipName}
					year={cruise.shipYear}
					capacity={cruise.shipCapacity}
					weight={cruise.shipWeight}
					team={cruise.shipTeam}
					description={cruise.shipDescription}
					links={cruise.shipLinks}
				/>
				<Slider images={cruise.shipImages} />
			</Container>
		</Container>
	)
}

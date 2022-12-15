import { FC } from 'react'

import { Container } from '../../../../components'
import { IShipImage } from '../../../../model/interfaces'

import styles from './ship.module.scss'
import { Slider } from './slider/slider'

interface IProps {
	shipName: string
	shipImages: IShipImage[]
}

export const Ship: FC<IProps> = ({ ...cruise }) => {

	return (
		<Container width="full" className={styles.component}>
			<Container width="containerXl" align="center">
				<Slider images={cruise.shipImages} />
			</Container>
		</Container>
	)
}

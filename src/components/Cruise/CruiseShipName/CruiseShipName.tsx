import { FC } from 'react'
import { Heading } from '../../Headings'

import shipIcon from './icons/ship.svg'

import styles from './cruise-ship-name.module.scss'

interface IProps {
	ship: string
}

export const CruiseShipName:FC<IProps> = ({ship}) => {

	return (
		<div className={styles.component}>
			<span className={styles.icon}>
				<img
					src={shipIcon}
					alt="Celebrity Flora"
				/>
			</span>
			<Heading as="h4" className={styles.title}>
				{ship}
			</Heading>
		</div>
	)
}

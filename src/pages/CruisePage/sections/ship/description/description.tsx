import { FC } from 'react'

import { ShipDesc, ShipLinks, ShipInfo, ShipName } from '../../../../../components/Ship'

import { IShipLinks } from '../../../../../model/interfaces'

import styles from './description.module.scss'

interface IProps {
	name: string
	year: number
	capacity: number
	weight: number
	team: number
	description: string
	links: IShipLinks[]
}

export const Description: FC<IProps> = ({
	name,
	year,
	capacity,
	weight,
	team,
	description,
	links
}) => {

	return (
		<div className={styles.component}>
			<div className={styles.wrapper}>
				<ShipName
					classNameText={styles.title}
					name={name}
					isDesc
				/>
				<ShipInfo
					year={year}
					capacity={capacity}
					weight={weight}
					team={team}
				/>
				<ShipDesc desc={description} />
			</div>
			<ShipLinks links={links} />
		</div >
	)
}

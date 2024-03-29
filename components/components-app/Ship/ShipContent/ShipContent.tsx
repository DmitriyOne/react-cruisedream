import { FC } from 'react'

import { ShipDesc, ShipInfoFull,ShipInfoShort, ShipLinks, ShipName } from '@crdr/components'

import styles from './ship-content.module.scss'

interface IProps {
	isShowDescText?: boolean
	isShowLinks?: boolean
	shipData?: 'full' | 'short'
}

export const ShipContent: FC<IProps> = ({ isShowDescText = true, isShowLinks = true, shipData = 'short' }) => {
	return (
		<div className={styles.component}>
			<div className={styles.wrapper}>
				<ShipName
					classNameText={styles.title}
					isDesc
				/>
				{shipData === 'full'
					? <ShipInfoFull />
					: <ShipInfoShort />
				}
				{isShowDescText && <ShipDesc />}
			</div>
			{isShowLinks && <ShipLinks />}
		</div >
	)
}

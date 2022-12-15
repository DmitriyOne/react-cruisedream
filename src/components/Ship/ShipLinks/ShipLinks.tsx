import { FC } from 'react'

import { IShipLinks } from '../../../model/interfaces'

import arrowIcon from './icons/arrow.svg'

import styles from './ship-links.module.scss'

interface IProps {
	links: IShipLinks[]
}

export const ShipLinks: FC<IProps> = ({links}) => {
	return (
		<ul className={styles.component}>
			{links.map((item, idx) =>
				<li key={idx} className={styles.item}>
					<a href={item.href} className={styles.link}>
						<span className={styles.text}>
							{item.text}
						</span>
						<span className={styles.arrow}>
							<img src={arrowIcon} alt="Arrow icon" />
						</span>
					</a>
				</li>
			)}
		</ul>
	)
}

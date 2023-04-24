import { SHIP_LINKS_TO } from '@crdr/constants'

import { MyImage } from '@crdr/ui'

import arrowIcon from './icons/arrow.svg'

import styles from './ship-links.module.scss'

export const ShipLinks = () => {
	return (
		<ul className={styles.component}>
			{SHIP_LINKS_TO.map((item, idx) =>
				<li key={idx} className={styles.item}>
					<a href={item.href} className={styles.link}>
						<span className={styles.text}>
							{item.text}
						</span>
						<span className={styles.arrow}>
							<MyImage
								src={arrowIcon}
								alt="Arrow icon"
							/>
						</span>
					</a>
				</li>
			)}
		</ul>
	)
}

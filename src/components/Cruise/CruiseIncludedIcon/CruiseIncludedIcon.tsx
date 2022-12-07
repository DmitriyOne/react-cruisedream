import { IconIncludedCruise } from './icons'

import { Heading } from '../../Headings'

import styles from './cruise-included-icon.module.scss'

export const CruiseIncludedIcon = () => {

	return (
		<ul className={styles.component}>
			{IconIncludedCruise.map((icon =>
				<li
					key={icon.title}
					className={styles.item}
				>
					<span className={styles.icon}>
						<img
							src={icon.src}
							alt={icon.alt}
						/>
					</span>
					<Heading
						as="h5"
						align="center"
						className={styles.title}
					>
						{icon.title}
					</Heading>
				</li>
			))}
		</ul>
	)
}

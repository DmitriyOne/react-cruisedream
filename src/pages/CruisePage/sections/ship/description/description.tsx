import { FC } from 'react'
import { Button, Heading } from '../../../../../components'
import { SHIP_LINKS_TO } from '../../../../../constants'

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

			<Heading as="h3" className={styles.title}>
				Лайнер {name}
			</Heading>

			<div className={styles.descWrapper}>
				<p className={styles.desc}>
					{description}
				</p>
				<Button className={styles.button}>
					Читать далее
				</Button>
			</div>
			<ul className={styles.linksWrapper}>
				{links.map((item, idx) =>
					<li key={idx} className={styles.linkItem}>
						<a href={item.href} className={styles.link}>

						</a>
					</li>
				)}
			</ul>
		</div>
	)
}

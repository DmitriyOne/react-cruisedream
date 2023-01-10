import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ICard } from '../../../model/interfaces'
import { B, Heading } from '../../../components'
import { CruiseLogo } from '../../Cruise'

import styles from './card-about-company.module.scss'

export const CardAboutCompany: FC<ICard> = ({ ...card }) => {
	return (
		<div className={styles.component}>
			<div className={styles.imageWrapper}>
				<img
					className={styles.image}
					src={card.src}
					alt={card.alt}
				/>
			</div>
			<div className={styles.body}>
				<div className={styles.row}>
					<Heading as="h4">
						<B fontWeight={600} className={styles.title}>
							{card.title}
						</B>
					</Heading>
					<CruiseLogo className={styles.logo} />
				</div>
				<B fontWeight={700} className={styles.fleetCompany}>
					Флот: 6
				</B>
				<p className={styles.subtitle}>
					{card.subtitle}
				</p>
				<B fontWeight={600} className={styles.tags}>
					{card.tags}
				</B>
			</div>
			<div className={styles.buttonWrapper}>
				<Link
					to={'#'}
					className={styles.button}
				>
					ПОДРОБНЕЕ
				</Link>
				<Link to={`${card.href}/${card.id}`} className={styles.button}>
					ВЫБРАТЬ
				</Link>
			</div>
		</div>
	)
}

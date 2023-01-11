import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ICard } from '../../../model/interfaces'
import { B, Heading } from '../..'
import { CruiseLogo } from '../../Cruise'

import styles from './card-about-button.module.scss'

export const CardAboutButton: FC<ICard> = ({ ...card }) => {
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
					{card.logo && <CruiseLogo src={card.logo} className={styles.logo} />}
				</div>
				{card.fleet &&
					<B fontWeight={700} className={styles.fleetCompany}>
						Флот: {card.fleet}
					</B>
				}
				{card.created &&
					<div className={styles.row}>
						<B fontWeight={700} className={styles.fleetCompany}>
							год постройки: {card.created}
						</B>
						<B fontWeight={700} className={styles.fleetCompany}>
							год реновации: {card.update}
						</B>
					</div>
				}
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
					{card.buttonText ? card.buttonText : 'ВЫБРАТЬ'}
				</Link>
			</div>
		</div>
	)
}

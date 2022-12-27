import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ICard } from '../../../model/interfaces'
import { B } from '../../B'
import { Heading } from '../../Headings'
import styles from './card-with-route.module.scss'

export const CardWithRoute: FC<ICard> = ({ ...card }) => {
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
				<Heading as="h4">
					<B fontWeight={600} className={styles.title}>
						{card.title}
					</B>
				</Heading>
				<p className={styles.subtitle}>
					{card.subtitle}
				</p>
			</div>
			<Link to={card.href!} className={styles.button}>
				ВЫБРАТЬ
			</Link>
		</div>
	)
}

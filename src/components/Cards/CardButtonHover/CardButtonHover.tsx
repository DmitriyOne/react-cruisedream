import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ICard } from '../../../model/interfaces'
import { B,Heading } from '../../../components-ui'

import styles from './card-button-hover.module.scss'

export const CardButtonHover: FC<ICard> = ({ ...card }) => {
	const subtitleClassName = classNames(styles.subtitle, {
		[styles.indent]: card.isSubtitleIndent,
		[styles.justify]: card.isSubtitleJustify
	})
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
				<p className={subtitleClassName}>
					{card.subtitle}
				</p>
			</div>
			<Link
				to={`${card.href}/${card.id}`}
				className={styles.button}
			>
				ПОДРОБНЕЕ
			</Link>
		</div>
	)
}

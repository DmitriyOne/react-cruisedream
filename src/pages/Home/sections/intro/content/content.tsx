/* eslint-disable no-unused-vars */
import { FC } from 'react'

import { B, Button } from '../../../../../components'

import styles from './content.module.scss'

enum ETextDirection {
	left = 'left',
	center = 'center',
	right = 'right'
}

interface IProps {
	variant?: keyof typeof ETextDirection
	title?: string
	href?: string
}

export const IntroContent: FC<IProps> = ({
	variant,
	title,
	href,
}) => {
	return (
		<div className={styles.component}>
			<h1 className={styles.title}>
				<span className={styles.textSale}>
					АКЦИЯ
					<span className={styles.textSaleDamion}>
						-30%
					</span>
				</span>
				{title}
			</h1>
			<Button
				reactHref={href}
				className={styles.button}
			>
				<B fontWeight={500}>
					ЗАБРОНИРОВАТЬ
				</B>
			</Button>
		</div>
	)
}

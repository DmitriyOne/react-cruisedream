/* eslint-disable no-unused-vars */
import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { B } from '../../../../components'

import styles from './intro-home-content.module.scss'

enum ETextDirection {
	left = 'left',
	center = 'center',
	right = 'right'
}

interface IProps {
	variant?: keyof typeof ETextDirection
	title?: string
	href?: string
	discount?: number
}

export const IntroHomeContent: FC<IProps> = ({
	variant,
	title,
	href,
	discount,
}) => {
	const textPosition = classNames({
		[styles.left]: variant === 'left',
		[styles.center]: variant === 'center',
		[styles.right]: variant === 'right'
	})
	return (
		<div className={classNames(
			styles.component,
			textPosition
		)}>
			<h1 className={styles.title}>
				<span className={styles.textSale}>
					АКЦИЯ
					<span className={styles.textSaleDamion}>
						-{discount}%
					</span>
				</span>
				{title}
			</h1>
			<Link
				to={href!}
				className={styles.button}
			>
				<B fontWeight={500}>
					ЗАБРОНИРОВАТЬ
				</B>
			</Link>
		</div>
	)
}

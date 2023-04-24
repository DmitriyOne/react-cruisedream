import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { EPosition } from '@crdr/enums'

import { B, Container } from '@crdr/ui'

import styles from './banner-slider-content.module.scss'

interface IProps {
	variant?: keyof typeof EPosition
	title?: string
	href?: string
	discount?: number
}

export const BannerSliderContent: FC<IProps> = ({
	variant,
	title,
	href,
	discount,
}) => {

	const textPosition = classNames({
		[styles.left]: variant === 'left',
		[styles.center]: variant === 'center',
		[styles.right]: variant === 'right',
	})
	return (
		<Container
			width="containerXl"
			className={styles.container}
		>
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
					href={href!}
					className={styles.button}
				>
					<B fontWeight={500}>
						ЗАБРОНИРОВАТЬ
					</B>
				</Link>
			</div>
		</Container>
	)
}

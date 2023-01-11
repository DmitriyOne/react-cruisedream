import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Discount, Heading } from '../../../components'

import styles from './sale-home.module.scss'

interface IProps {
	src: string
	alt: string
	title: string
	description: string
	href: string
	discount: boolean
	discountPercentage: number
}

export const SaleHome: FC<IProps> = ({ ...swiper }) => {
	return (
		<Link
			to={swiper.href}
			className={styles.component}
		>
			<div className={styles.imageWrapper} >
				<img
					className={styles.image}
					src={swiper.src}
					alt={swiper.alt}
				/>
			</div>
			<Heading as="h4" className={styles.title}>
				{swiper.title}
			</Heading>
			<p className={styles.subtitle}>
				{swiper.description}
			</p>
			{swiper.discount &&
				<Discount
					className={styles.discount}
					percentage={swiper.discountPercentage}
				/>}
		</Link>
	)
}

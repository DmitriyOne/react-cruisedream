import { FC } from 'react'
import { Button } from '../../../components'

import styles from './partners.module.scss'

interface IProps {
	href: string
	src: string
	alt: string
}

export const Partners: FC<IProps> = ({ ...swiper }) => {
	return (
		<Button
			href={swiper.href}
			className={styles.component}
		>
			<img
				src={swiper.src}
				alt={swiper.alt}
			/>
		</Button>
	)
}

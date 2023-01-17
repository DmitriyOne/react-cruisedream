import { Button, Heading } from '../../../../../../components-ui'
import { FC } from 'react'

import styles from './timeline-item.module.scss'

interface IProps {
	image: string
	port: string
}

export const TimelineItem: FC<IProps> = ({ image, port }) => {

	return (
		<div className={styles.component}>
			<div className={styles.header}>
				<span className={styles.image}>
					<img src={image} alt="Your route" />
				</span>
				<div className={styles.label}>
					7
					<span className={styles.labelSpan}>
						дней
					</span>
				</div>
			</div>
			<div className={styles.body}>
				<Heading as="h5" className={styles.title}>
					{port}
				</Heading>
				<div className={styles.date}>
					Ср 01 мар 2023
				</div>
				<div className={styles.time}>
					08:00-18:00
				</div>
				<p className={styles.desc}>
					Как же класно мы пойдет по морям из великолепного города Сохна
				</p>
				<Button href="#" className={styles.button}>
					ПОДРОБНЕЕ
				</Button>
			</div>
		</div>
	)
}

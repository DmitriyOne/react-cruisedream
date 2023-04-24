import { SwiperPartners } from '@crdr/components'
import { Container, Heading } from '@crdr/ui'

import styles from './partners.module.scss'

export const Partners = () => {

	return (
		<Container width="full" className={styles.component} tag="section">
			<div className={styles.container}>
				<Heading as="h3" className={styles.title}>
					НАШИ ПАРТНЕРЫ
				</Heading>
				<span className={styles.subtitle}>
					круизные компании
				</span>
				<SwiperPartners />
			</div>
		</Container>
	)
}

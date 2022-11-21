import { Button, Container, Heading } from '../../../components'

import 'swiper/css'
import 'swiper/css/grid'
import styles from './regions.module.scss'
import { RegionCard } from './region-card/region-card'
import { CRUISE_ROUTES } from '../../../constants'

export const Regions = () => {
	return (
		<Container width="full" className={styles.component}>
			<Container className={styles.container} direction="column">
				<Heading as="h3" className={styles.title}>
					РЕГИОНЫ
				</Heading>
				<RegionCard />
				<Button
					className={styles.button}
					reactHref={CRUISE_ROUTES.SHIPS}
				>
					ВСЕ РЕГИОНЫ
				</Button>
			</Container>
		</Container>
	)
}

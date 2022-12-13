import { Container, Heading } from '../../../../components'
import { Link } from 'react-router-dom'

import { RegionCard } from './region-card/region-card'
import { CRUISE_ROUTES } from '../../../../constants'

import styles from './regions.module.scss'

export const Regions = () => {
	return (
		<Container width="full" className={styles.component}>
			<Container className={styles.container} direction="column">
				<Heading as="h3" className={styles.title}>
					РЕГИОНЫ
				</Heading>
				<RegionCard />
				<Link
					className={styles.link}
					to={CRUISE_ROUTES.SHIPS}
				>
					ВСЕ РЕГИОНЫ
				</Link>
			</Container>
		</Container>
	)
}

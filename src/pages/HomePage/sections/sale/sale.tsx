import { Link } from 'react-router-dom'

import { Container, Heading, MySwiper } from '../../../../components'
import { CRUISE_ROUTES } from '../../../../constants'

import { dataSale } from '../../../../fakedata'
import { params } from './swiper'

import styles from './sale.module.scss'

export const Sale = () => {
	return (
		<Container width="full" className={styles.component} tag="section">
			<Container className={styles.container} direction="column">
				<Heading as="h3" className={styles.title}>
					АКЦИИ
				</Heading>

				<MySwiper
					swiperClass={styles.swiper}
					slideClass={styles.slide}
					buttonClass={styles.swiperButtons}
					params={params}
					array={dataSale}
					children="saleHome"
				/>

				<Link
					className={styles.link}
					to={CRUISE_ROUTES.DISCOUNTS}
				>
					ВСЕ АКЦИИ
				</Link>
			</Container>
		</Container>
	)
}

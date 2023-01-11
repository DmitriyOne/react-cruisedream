import { params } from './swiper'

import { dataPartners } from '../../../../fakedata'

import { Container, Heading, MySwiper } from '../../../../components'

import styles from './partners.module.scss'

export const Partners = () => {

	return (
		<Container
			width="full"
			className={styles.component}
			direction="column"
			tag="section"
		>
			<Heading as="h3" className={styles.title}>
				НАШИ ПАРТНЕРЫ
			</Heading>
			<span className={styles.subtitle}>
				круизные компании
			</span>

			<MySwiper
				swiperClass={styles.swiper}
				paginationClass={styles.pagination}
				buttonClass={styles.swiperButton}
				params={params}
				array={dataPartners}
				children="partners"
				arrowColor="gray"
				isPagination={true}
			/>
		</Container>
	)
}

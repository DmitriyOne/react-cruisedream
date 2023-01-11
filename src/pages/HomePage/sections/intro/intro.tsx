import { params } from './swiper'
import { dataIntro } from '../../../../fakedata'

import { Container, MySwiper } from '../../../../components'

import styles from './intro.module.scss'

export const Intro = () => {

	return (
		<Container
			width="full"
			tag="section"
		>
			<MySwiper
				slideClass={styles.slide}
				buttonClass={styles.swiperButton}
				params={params}
				array={dataIntro}
				children="introHome"
			/>
		</Container>
	)
}

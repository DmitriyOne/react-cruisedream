import classNames from 'classnames'

import { dataOverseasCruisesCard, params4Col } from '@crdr/fakedata'

import { CardDefault } from '@crdr/components'
import { MySwiper } from '@crdr/plugins'
import { Container, Heading } from '@crdr/ui'

import styles from '../cruises.module.scss'

export const OverseasCruises = () => {

	return (
		<>
			<Heading as="h2" className={classNames(styles.pt, 'title-secondary')}>
				ПОПУЛЯРНЫЕ ЗАРУБЕЖНЫЕ КРУИЗЫ
			</Heading>
			<Container className={styles.container}>
				<MySwiper
					params={params4Col}
					arrowClass={styles.swiperArrow}
					arrowColor="gray"
					buttonPosition="behind-swiper"
					isSlideBoxShadow
					isArrowShowOnlyTablet
					isArrowIndentEdge
					isSwiperIndentMobile
				>
					{dataOverseasCruisesCard.map((card, idx) =>
						<CardDefault
							key={idx}
							titleAlign="center"
							bodyPadding="l"
							isButtonHoverEffect
							{...card}
						/>
					)}
				</MySwiper>
			</Container>
		</>
	)
}

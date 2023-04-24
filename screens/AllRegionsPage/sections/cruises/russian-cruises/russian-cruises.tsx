import { dataRussianCruisesCard, params4Col } from '@crdr/fakedata'

import { CardDefault } from '@crdr/components'
import { MySwiper } from '@crdr/plugins'
import { Container, Heading } from '@crdr/ui'

import styles from '../cruises.module.scss'

export const RussianCruises = () => {

	return (
		<>
			<Heading as="h2" className="title-secondary">
				популярные круизы из России
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
					{dataRussianCruisesCard.map((card, idx) =>
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

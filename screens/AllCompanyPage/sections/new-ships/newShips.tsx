import classNames from 'classnames'

import { dataNewShip, params4Col } from '@crdr/fakedata'

import { CardDefault } from '@crdr/components'
import { MySwiper } from '@crdr/plugins'
import { Container, Heading } from '@crdr/ui'

import styles from './new-ships.module.scss'

export const NewShips = () => {

	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				НОВЫЕ КОРАБЛИ
			</Heading>

			<Container className={styles.container}>
				<MySwiper
					params={params4Col}
					buttonPosition="behind-swiper"
					arrowColor="gray"
					arrowClass={styles.swiperArrow}
					isSlideBoxShadow
					isArrowShowOnlyTablet
					isArrowIndentEdge
					isSwiperIndentMobile
				>
					{dataNewShip.map((card, idx) =>
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
		</Container>
	)
}

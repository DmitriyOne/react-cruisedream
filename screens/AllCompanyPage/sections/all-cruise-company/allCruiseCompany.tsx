import classNames from 'classnames'

import { dataAboutCompany, params3x3Grid } from '@crdr/fakedata'

import { CardDefault } from '@crdr/components'
import { MySwiper } from '@crdr/plugins'
import { Container, Heading } from '@crdr/ui'

import styles from './all-cruise-company.module.scss'

export const AllCruiseCompany = () => {

	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				ВСЕ КРУИЗНЫЕ КОМПАНИИ
			</Heading>

			<Container className={styles.container}>
				<MySwiper
					params={params3x3Grid}
					buttonPosition="behind-swiper"
					arrowColor="gray"
					arrowClass={styles.swiperArrow}
					isSlideBoxShadow
					isArrowShowOnlyTablet
				>
					{dataAboutCompany.map((card, idx) =>
						<CardDefault
							key={idx}
							imageHeight="l"
							bodyPadding="s"
							buttonColumn="2"
							{...card}
						/>
					)}
				</MySwiper>
			</Container>
		</Container>
	)
}

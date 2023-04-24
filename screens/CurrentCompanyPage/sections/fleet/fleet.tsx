import { useRef, useState } from 'react'
import classNames from 'classnames'

import { dataFleet, paramsRow3PerColumn } from '@crdr/fakedata'

import { CardDefault } from '@crdr/components'
import { MySwiper } from '@crdr/plugins'
import { Button, Container, Heading } from '@crdr/ui'

import styles from './fleet.module.scss'

export const Fleet = () => {
	const [isShowAll, setIsShowAll] = useState(false)
	const refButton = useRef<HTMLButtonElement>(null)

	const getAll = (e: any) => {
		e.preventDefault()
		setIsShowAll(true)
		setTimeout(() => {
			refButton.current?.remove()
		}, 1000)
	}

	const buttonClass = classNames('button', {
		[styles.hideButton]: isShowAll,
	})
	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				ФЛОТ MSC CRUISES
			</Heading>
			<Container className={styles.container}>
				<MySwiper
					params={paramsRow3PerColumn}
					buttonPosition="behind-swiper"
					swiperDisplay="grid"
					slideWidth="w33"
					arrowColor="gray"
					arrowClass={styles.swiperArrow}
					isArrowShowOnlyTablet
					isSlideBoxShadow
				>
					{dataFleet
						.slice(0, isShowAll ? dataFleet.length : 6)
						.map((card, idx) => (
							<CardDefault
								key={idx}
								titleAlign="start"
								imageHeight="l"
								bodyPadding="s"
								buttonColumn="2"
								{...card}
							/>
						))}
				</MySwiper>
			</Container>
			<Button
				ref={refButton}
				className={buttonClass}
				onClick={(e) => getAll(e)}
			>
				ВСЕ КОРАБЛИ
			</Button>
		</Container>
	)
}

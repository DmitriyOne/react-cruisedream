import { FC } from 'react'

import { IHelpFulAdvice } from '@crdr/interfaces'

import { SwiperAdvicesGallery } from '@crdr/components'
import { Container, Heading } from '@crdr/ui'

import styles from './helpful-advice.module.scss'

interface IProps extends IHelpFulAdvice {
	isSlider?: boolean
}

export const HelpfulAdvice: FC<IProps> = ({ isSlider = true, ...content }) => {
	return (
		<Container
			width="full"
			direction="column"
			className="pt-section"
			tag="section"
		>
			<Container direction="column" className={styles.content}>
				<Heading as="h2" className="title-secondary">
					ПОЛЕЗНЫЕ СОВЕТЫ
				</Heading>
				<div
					className={styles.subtitle}
					dangerouslySetInnerHTML={{ __html: content.desc }}
				/>
			</Container>
			{isSlider && <SwiperAdvicesGallery images={content.images} />}
		</Container>
	)
}

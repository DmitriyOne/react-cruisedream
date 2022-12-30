/* eslint-disable max-len */
import { FC } from 'react'
import { CardImageSlider, Container, Heading } from '../../../components'

import styles from './helpful-advice.module.scss'

interface IImage {
	src: string
	alt: string
}

interface IProps {
	id: number
	desc: string
	images: IImage[]
}

export const HelpfulAdvice: FC<IProps> = ({ ...content }) => {
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
				<p className={styles.subtitle}>
					{content.desc}
				</p>
			</Container>

			<CardImageSlider images={content.images} />
		</Container>
	)
}

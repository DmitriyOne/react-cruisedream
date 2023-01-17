/* eslint-disable max-len */
import { FC } from 'react'

import { Container, Heading } from '../../../components-ui'
import { CardImageSlider } from '../../Cards'

import styles from './helpful-advice.module.scss'

interface IImage {
	src: string
	alt: string
}

interface IProps {
	id: number
	desc: string
	images: IImage[]
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
				<p className={styles.subtitle}>
					{content.desc}
				</p>
			</Container>
			{isSlider && <CardImageSlider images={content.images} />}
		</Container>
	)
}

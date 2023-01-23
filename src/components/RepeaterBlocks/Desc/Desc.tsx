/* eslint-disable max-len */
import classNames from 'classnames'
import { FC } from 'react'

import { Container, Heading } from '../../../components-ui'

import styles from './desc.module.scss'

interface IProps {
	title: string
	desc: string
	componentClass?: string
}

export const Desc: FC<IProps> = ({ componentClass, ...content }) => {
	return (
		<Container
			width="full"
			className={classNames(componentClass, styles.component)}
			tag="section"
		>
			<Container width="containerS" direction="column">
				<Heading
					as="h2"
					className={classNames('title-secondary', styles.title)}
				>
					{content.title}
				</Heading>

				<p className={styles.text}>
					{content.desc}
				</p>
			</Container>
		</Container>
	)
}

import { FC } from 'react'
import classNames from 'classnames'

import { Container, Heading } from '@crdr/ui'

import styles from './desc-current-page.module.scss'

interface IProps {
	title: string
	desc: string
	componentClass?: string
}

export const DescCurrentPage: FC<IProps> = ({ componentClass, ...content }) => {
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
				<div
					className={styles.text}
					dangerouslySetInnerHTML={{ __html: content.desc }}
				/>
			</Container>
		</Container>
	)
}

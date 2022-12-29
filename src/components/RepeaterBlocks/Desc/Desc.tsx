/* eslint-disable max-len */
import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Container, Heading } from '../../../components'
import { CRUISE_ROUTES } from '../../../constants'

import styles from './desc.module.scss'

interface IProps {
	title: string
	desc: string
}

export const Desc: FC<IProps> = ({ ...content }) => {
	return (
		<Container
			width="full"
			className={classNames(styles.component, 'pb-section')}
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

				<Link to={CRUISE_ROUTES.SEARCH} className="button">
					ВСЕ КРУИЗЫ
				</Link>
			</Container>
		</Container>
	)
}

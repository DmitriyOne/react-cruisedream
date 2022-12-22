import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import { Heading } from '../../Headings'

import shipIcon from './icons/ship.svg'

import styles from './ship-name.module.scss'

interface IProps {
	classNameText?: string
	classComponent?: string
	isIcon?: boolean
	isDesc?: boolean
	isBookTo?: boolean
}

export const ShipName: FC<IProps> = ({
	classNameText,
	classComponent,
	isIcon,
	isDesc,
	isBookTo
}) => {
	const [content, setContent] = useState('')

	const isDescContent = 'Лайнер' + ' ' + 'MSC Splendida'
	const isBookToContent = 'Круиз на борту лайнера' + ' ' + 'MSC Splendida'

	useEffect(() => {
		if (isDesc) {
			setContent(isDescContent)
		} else if (isBookTo) {
			setContent(isBookToContent)
		} else {
			setContent('MSC Splendida')
		}
	}, [])

	return (
		<div className={classNames(classComponent, styles.component)}>
			{isIcon &&
				<span className={styles.icon}>
					<img
						src={shipIcon}
						alt="Celebrity Flora"
					/>
				</span>
			}
			<Heading as="h3" className={classNames(classNameText, styles.title)}>
				{content}
				{isDesc && <span className={styles.line} />}
			</Heading>
		</div>
	)
}

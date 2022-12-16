import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import { Heading } from '../../Headings'

import shipIcon from './icons/ship.svg'

import styles from './ship-name.module.scss'

interface IProps {
	name: string
	classNameText?: string
	classComponent?: string
	isIcon?: boolean
	isDesc?: boolean
	isBookTo?: boolean
}

export const ShipName: FC<IProps> = ({
	name,
	classNameText,
	classComponent,
	isIcon,
	isDesc,
	isBookTo
}) => {
	const [content, setContent] = useState('')

	const isDescContent = 'Лайнер' + ' ' + name
	const isBookToContent = 'Круиз на борту лайнера' + ' ' + name

	useEffect(() => {
		if (isDesc) {
			setContent(isDescContent)
		} else if (isBookTo) {
			setContent(isBookToContent)
		} else {
			setContent(name)
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

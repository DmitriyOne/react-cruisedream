/* eslint-disable no-useless-concat */
import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import { Heading, MyImage } from '@crdr/ui'

import shipIcon from './icons/ship.svg'

import styles from './ship-name.module.scss'

interface IProps {
	classNameText?: string
	classComponent?: string
	classIcon?: string
	isIcon?: boolean
	isDesc?: boolean
	isBookTo?: boolean
}

export const ShipName: FC<IProps> = ({
	classNameText,
	classComponent,
	classIcon,
	isIcon,
	isDesc,
	isBookTo,
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={classNames(classComponent, styles.component)}>
			{isIcon &&
				<span className={classNames(classIcon, styles.icon)}>
					<MyImage
						src={shipIcon}
						alt="Celebrity Flora"
					/>
				</span>
			}
			<Heading as="h3" className={classNames(styles.title, classNameText)}>
				{content}
				{isDesc && <span className={styles.line} />}
			</Heading>
		</div>
	)
}

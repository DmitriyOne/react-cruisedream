import { FC } from 'react'
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
}

export const ShipName: FC<IProps> = ({
	name,
	classNameText,
	classComponent,
	isIcon,
	isDesc
}) => {

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
				{isDesc ? 'Лайнер' + ' ' + name : name}
				{isDesc && <span className={styles.line} />}
			</Heading>
		</div>
	)
}

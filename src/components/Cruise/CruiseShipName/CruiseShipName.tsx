import { FC } from 'react'
import { Heading } from '../../Headings'

import shipIcon from './icons/ship.svg'

import styles from './cruise-ship-name.module.scss'
import classNames from 'classnames'

interface IProps {
	ship: string
	isIcon?: boolean
	classNameText?: string
}

export const CruiseShipName: FC<IProps> = ({
	ship,
	isIcon = true,
	classNameText
}) => {

	return (
		<div className={styles.component}>
			{isIcon &&
				<span className={styles.icon}>
					<img
						src={shipIcon}
						alt="Celebrity Flora"
					/>
				</span>
			}
			<Heading as="h4" className={classNames(classNameText, styles.title)}>
				{ship}
			</Heading>
		</div>
	)
}

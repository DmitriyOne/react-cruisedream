import classNames from 'classnames'
import { FC } from 'react'

import { DataIncludedIcon } from './data/included-icons'

import { Heading } from '../../../components-ui/Headings'

import styles from './cruise-included-icon.module.scss'

interface IProps {
	classNameIcon?: string
	classNameItem?: string
}

export const CruiseIncludedIcon: FC<IProps> = ({ classNameIcon, classNameItem }) => {

	return (
		<ul className={styles.component}>
			{DataIncludedIcon.map(((icon, id) =>
				<li
					key={id}
					className={classNames(classNameItem, styles.item)}
				>
					<span className={classNames(classNameIcon, styles.icon)}>
						<img
							src={icon.src}
							alt={icon.alt}
						/>
					</span>
					<Heading
						as="h5"
						align="center"
						className={styles.title}
					>
						{icon.title}
					</Heading>
				</li>
			))}
		</ul>
	)
}

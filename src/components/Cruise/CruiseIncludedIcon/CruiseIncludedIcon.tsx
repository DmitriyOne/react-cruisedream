import { FC } from 'react'

import { IIncludedIcon } from '../../../model/interfaces'

import { Heading } from '../../Headings'

import styles from './cruise-included-icon.module.scss'

interface IProps {
	icons: IIncludedIcon[]
}

export const CruiseIncludedIcon:FC<IProps> = ({icons}) => {

	return (
		<ul className={styles.component}>
			{icons.map(((icon, id) =>
				<li
					key={id}
					className={styles.item}
				>
					<span className={styles.icon}>
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

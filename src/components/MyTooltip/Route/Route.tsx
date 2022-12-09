import classNames from 'classnames'
import React, { FC } from 'react'
import { ICruiseRoute } from '../../../model/interfaces'

import styles from './route.module.scss'

interface IProps {
	routes?: ICruiseRoute[]
	classText?: string
}

export const Route: FC<IProps> = ({routes, classText}) => {
	return (
		<>
			{routes?.map((breadcrumbs, idx) =>
				<li
					key={idx}
					className={classNames(styles.text, classText)}
				>
					{breadcrumbs.city},
					<span>
						&nbsp;{breadcrumbs.country}
					</span>
				</li>
			)}
		</>
	)
}

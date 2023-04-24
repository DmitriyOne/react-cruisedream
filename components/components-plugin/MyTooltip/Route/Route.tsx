import { FC } from 'react'
import classNames from 'classnames'

import { ICruiseRoute } from '@crdr/interfaces'

import styles from './route.module.scss'

interface IProps {
	tooltipRoutes?: ICruiseRoute[]
	classText?: string
}

export const Route: FC<IProps> = ({tooltipRoutes, classText}) => {
	return (
		<>
			{tooltipRoutes?.map((breadcrumbs, idx) =>
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

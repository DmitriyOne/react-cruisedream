import React, { FC } from 'react'
import { ICruiseRoute } from '../../../model/interfaces'

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
					className={classText}
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

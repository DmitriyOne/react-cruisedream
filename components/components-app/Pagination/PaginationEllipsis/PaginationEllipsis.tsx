import React, { FC } from 'react'

import styles from '../PaginationItem/pagination-item.module.scss'

interface IProps {
	id: string
}

export const PaginationEllipsis: FC<IProps> = ({ id }) => {

	return (
		<li
			key={id}
			className={styles.component}
		>
			...
		</li>
	)
}

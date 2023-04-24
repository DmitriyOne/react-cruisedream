import { FC } from 'react'
import classNames from 'classnames'

import styles from './pagination-amount.module.scss'

interface IPaginationAmountProps {
	currentPage: number
	totalPages: number
	className: string
}

export const PaginationAmount: FC<IPaginationAmountProps> = ({
	className,
	currentPage,
	totalPages,
}) => {

	return (
		<div className={classNames(styles.component, className)}>
			{currentPage} из {totalPages}
		</div>
	)
}

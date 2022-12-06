import classNames from 'classnames'
import { FC, useContext } from 'react'

import { PaginateContext } from '../../context'

import arrowIcon from './icon/arrow.svg'

import styles from './my-pagination.module.scss'

interface IProps {
	className?: string
	amountClassName?: string
}

export const MyPagination: FC<IProps> = ({
	className,
	amountClassName,
}) => {
	const pageNumbers = [1, 2, 3]
	const {currentPage, handlerPaginate} = useContext(PaginateContext)

	return (
		<div className={classNames(styles.component, className)}>
			<ul className={styles.itemWrapper}>
				<li className={classNames(styles.item, styles.prev)}>
					<img className={styles.icon} src={arrowIcon} alt="Prev icon" />
				</li>
				{pageNumbers.map(number =>
					<li
						key={number}
						className={classNames(styles.item, {
							[styles.active]: currentPage === number
						})}
						onClick={() => handlerPaginate(number)}
					>
						{number}
					</li>
				)}
				<li className={classNames(styles.item, styles.next)}>
					<img className={styles.icon} src={arrowIcon} alt="Next icon" />
				</li>
			</ul>
			<div className={classNames(styles.amountWrapper, amountClassName)}>
				{currentPage} из {pageNumbers.length}
			</div>
		</div>
	)
}

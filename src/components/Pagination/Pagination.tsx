import classNames from 'classnames'
import { FC, useContext, useEffect, useState } from 'react'

import { PaginateContext } from '../../context'

import arrowIcon from './icon/arrow.svg'

import styles from './pagination.module.scss'

interface IProps {
	className?: string
	amountClassName?: string
}

export const MyPagination: FC<IProps> = ({
	className,
	amountClassName,
}) => {
	const [isShowPrev, setIsShowPrev] = useState(true)
	const [isShowNext, setIsShowNext] = useState(true)
	const pageNumbers = [1, 2, 3]
	const { currentPage, handlerPaginate } = useContext(PaginateContext)

	useEffect(() => {
		setIsShowPrev(currentPage !== pageNumbers[0])
		setIsShowNext(currentPage !== pageNumbers.length)
	}, [currentPage])

	const handlerPrevPage = () => {
		handlerPaginate(currentPage - 1)
	}

	const handlerNextPage = () => {
		handlerPaginate(currentPage + 1)
	}

	return (
		<div className={classNames(styles.component, className)}>
			<ul className={styles.itemWrapper}>
				{isShowPrev &&
					<li
						className={classNames(styles.item, styles.prev)}
						onClick={handlerPrevPage}
					>
						<img className={styles.icon} src={arrowIcon} alt="Prev icon" />
					</li>
				}
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
				{isShowNext &&
					<li
						className={classNames(styles.item, styles.next)}
						onClick={handlerNextPage}
					>
						<img className={styles.icon} src={arrowIcon} alt="Next icon" />
					</li>
				}
			</ul>
			<div className={classNames(styles.amountWrapper, amountClassName)}>
				{currentPage} из {pageNumbers.length}
			</div>
		</div>
	)
}

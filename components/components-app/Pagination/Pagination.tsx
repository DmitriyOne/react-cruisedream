import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import { PaginationAmount } from './PaginationAmount/PaginationAmount'
import { PaginationArrow } from './PaginationArrow/PaginationArrow'
import { PaginationNumbers } from './PaginationNumbers/PaginationNumbers'

import styles from './pagination.module.scss'

export interface IPaginationProps {
	className?: string
	amountClassName?: string
	resultPerPage: number
	resultTotal: number
	currentPage: number
	// eslint-disable-next-line no-unused-vars
	handlerPaginate: (number: number) => void
}

export const MyPagination: FC<IPaginationProps> = ({
	className,
	amountClassName,
	resultPerPage,
	resultTotal,
	currentPage = 1,
	handlerPaginate,
}) => {
	const router = useRouter()
	const startIndex = Number(router.query.start) || 0

	const [isShowPrev, setIsShowPrev] = useState(true)
	const [isShowNext, setIsShowNext] = useState(true)

	// eslint-disable-next-line react-hooks/exhaustive-deps
	let pageNumbers: number[] = []

	for (let i = 1; i <= Math.ceil(resultTotal / resultPerPage); i++) {
		pageNumbers.push(i)
	}

	useEffect(() => {
		setIsShowPrev(currentPage !== pageNumbers[0])
		setIsShowNext(currentPage !== pageNumbers.length)
	}, [currentPage, pageNumbers])

	return (
		<div className={classNames(styles.component, className)}>
			<ul className={styles.wrapper}>
				{isShowPrev &&
					<PaginationArrow
						onClick={() => handlerPaginate(currentPage - 1)}
						arrow="prev"
						startIndex={startIndex}
					/>
				}
				<PaginationNumbers
					pageNumbers={pageNumbers}
					currentPage={currentPage}
					handlerPaginate={handlerPaginate}
				/>
				{isShowNext &&
					<PaginationArrow
						onClick={() => handlerPaginate(currentPage + 1)}
						arrow="next"
						startIndex={startIndex}
					/>
				}
			</ul>
			<PaginationAmount
				className={amountClassName}
				currentPage={currentPage}
				totalPages={pageNumbers.length}
			/>
		</div>
	)
}

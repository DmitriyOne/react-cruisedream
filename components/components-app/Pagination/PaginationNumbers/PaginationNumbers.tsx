import { FC } from 'react'

import { PaginationEllipsis } from '../PaginationEllipsis/PaginationEllipsis'
import { PaginationItem } from '../PaginationItem/PaginationItem'

interface IPaginationNumbersProps {
	pageNumbers: number[]
	currentPage: number
	// eslint-disable-next-line no-unused-vars
	handlerPaginate: (number: number) => void
}

export const PaginationNumbers: FC<IPaginationNumbersProps> = ({ pageNumbers, currentPage, handlerPaginate }) => {
	const pagesCount = pageNumbers.length
	const maxVisiblePages = 5 // Максимальное количество отображаемых страниц

	const firstPage = <PaginationItem number={1} onClick={() => handlerPaginate(1)} />
	const lastPage = <PaginationItem number={pagesCount} onClick={() => handlerPaginate(pagesCount)} />

	if (pagesCount <= maxVisiblePages) {
		return (
			<>
				{pageNumbers.map((number, idx) =>
					<PaginationItem
						key={idx}
						number={number}
						currentPage={currentPage}
						onClick={() => handlerPaginate(number)}
					/>
				)}
			</>
		)
	}

	if (currentPage < 3) {
		// Если мы близко к началу
		const visiblePages = pageNumbers.slice(0, maxVisiblePages)
		return (
			<>
				{visiblePages.map((number, idx) =>
					<PaginationItem
						key={idx}
						number={number}
						currentPage={currentPage}
						onClick={() => handlerPaginate(number)}
					/>
				)}
				<PaginationEllipsis id="ellipsis-start" />
				{lastPage}
			</>
		)
	} else if (currentPage >= pagesCount - 2) {
		// Если мы близко к концу
		const visiblePages = pageNumbers.slice(pagesCount - maxVisiblePages, pagesCount)
		return (
			<>
				{firstPage}
				<PaginationEllipsis id="ellipsis-end" />
				{visiblePages.map((number, idx) =>
					<PaginationItem
						key={idx}
						number={number}
						currentPage={currentPage}
						onClick={() => handlerPaginate(number)}
					/>
				)}
			</>
		)
	} else {
		// Иначе мы где-то посередине
		const visiblePages = pageNumbers.slice(currentPage - 2, currentPage + 1)
		return (
			<>
				{firstPage}
				<PaginationEllipsis id="ellipsis-start" />
				{visiblePages.map((number, idx) =>
					<PaginationItem
						key={idx}
						number={number}
						currentPage={currentPage}
						onClick={() => handlerPaginate(number)}
					/>
				)}
				<PaginationEllipsis id="ellipsis-end" />
				{lastPage}
			</>
		)
	}
}

import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import styles from './pagination-item.module.scss'

interface IProps {
	number: number,
	currentPage?: number,
	// eslint-disable-next-line no-unused-vars
	onClick?: (number: number) => void
}

export const PaginationItem: FC<IProps> = ({
	number,
	currentPage,
	onClick,
}) => {
	const router = useRouter()

	const className = classNames(styles.component, {
		[styles.active]: currentPage === number,
	})

	const href = {
		pathname: router.pathname,
		query: {
			...router.query,
			start: (number * 10 - 10).toString(),
		},
	}

	return (
		<li
			key={number}
			className={className}
			onClick={() => onClick(number)}
		>
			<Link
				passHref
				href={href}
				scroll={false}
			>
				{number}
			</Link>
		</li>
	)
}

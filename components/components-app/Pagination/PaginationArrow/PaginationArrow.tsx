import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import { MyImage } from '@crdr/ui'

import arrowIcon from '../icon/arrow.svg'

import styles from './pagination-arrow.module.scss'

interface IProps {
	arrow: 'prev' | 'next'
	startIndex: number
	onClick: () => void
}

export const PaginationArrow: FC<IProps> = ({
	arrow,
	startIndex,
	onClick,
}) => {
	const router = useRouter()

	const href = {
		pathname: router.pathname,
		query: {
			...router.query,
			start: (arrow === 'prev' ? startIndex - 10 : startIndex + 10).toString(),
		},
	}

	const arrowClass = classNames(styles.component, {
		[styles.prev]: arrow === 'prev',
		[styles.next]: arrow === 'next',
	})
	const altText = arrow === 'prev' ? 'Prev icon' : 'Next icon'
	return (
		<li
			className={arrowClass}
			onClick={onClick}
		>
			<Link
				passHref
				href={href}
				scroll={false}
			>
				<MyImage
					imageClass={styles.icon}
					src={arrowIcon}
					alt={altText}
				/>
			</Link>
		</li>
	)
}

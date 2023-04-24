import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { CRUISE_ROUTES } from '@crdr/constants'

import styles from './breadcrumbs.module.scss'

interface IProps {
	currentPage: string
	classComponent?: string
}

export const Breadcrumb: FC<IProps> = ({ currentPage, classComponent }) => {

	return (
		<ul className={classNames(classComponent, styles.component)}>
			<li className={styles.item}>
				<Link
					href={CRUISE_ROUTES.HOME}
					className={styles.link}
				>
					Главная
				</Link>
			</li>
			<li className={styles.item}>
				<Link
					href={CRUISE_ROUTES.SEARCH}
					className={styles.link}
				>
					Страница поиска
				</Link>
			</li>
			<li className={styles.item}>
				<span className={styles.current}>
					{currentPage}
				</span>
			</li>
		</ul>
	)
}

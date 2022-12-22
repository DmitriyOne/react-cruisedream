import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { CRUISE_ROUTES } from '../../constants'

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
					to={CRUISE_ROUTES.HOME}
					className={styles.link}
				>
					Главная
				</Link>
			</li>
			<li className={styles.item}>
				<Link
					to={CRUISE_ROUTES.SEARCH}
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

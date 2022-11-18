import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { CRUISE_ROUTES } from '../../../../constants'

import styles from './footer-links.module.scss'

export const FooterLinks = () => {
	return (
		<div className={styles.row}>
			<div className={styles.col}>
				<Link
					to={CRUISE_ROUTES.HOME}
					className={classNames(styles.visible, styles.link)}
				>
					Главная
				</Link>
				<div className={styles.dropdown}>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Главная 2
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Главная 3
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Главная 4
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Главная 5
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Контакты
					</Link>
				</div>
			</div>
			<div className={styles.col}>
				<Link
					to={CRUISE_ROUTES.HOME}
					className={classNames(styles.visible, styles.link)}
				>
					Регионы
				</Link>
				<div className={styles.dropdown}>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Регионы 2
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Регионы 3
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Регионы 4
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Регионы 5
					</Link>
				</div>
			</div>
			<div className={styles.col}>
				<Link
					to={CRUISE_ROUTES.HOME}
					className={classNames(styles.visible, styles.link)}
				>
					По России
				</Link>
				<div className={styles.dropdown}>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						По России 2
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						По России 3
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						По России 4
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						По России 5
					</Link>
				</div>
			</div>
			<div className={styles.col}>
				<Link
					to={CRUISE_ROUTES.HOME}
					className={classNames(styles.visible, styles.link)}
				>
					Корабли
				</Link>
				<div className={styles.dropdown}>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Корабли 2
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Корабли 3
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Корабли 4
					</Link>
					<Link
						to={CRUISE_ROUTES.EMPTY}
						className={classNames(styles.hidden, styles.link)}
					>
						Корабли 5
					</Link>
				</div>
			</div>

		</div>
	)
}

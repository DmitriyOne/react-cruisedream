import classNames from 'classnames'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import arrowIcon from './icons/arrow.svg'

import { MenuLinks } from '../../../../constants'
import { useWindowSize } from '../../../../hooks'

import styles from './navbar.module.scss'

interface IProps {
	navbarIsOpen: boolean;
};

export const Navbar: FC<IProps> = ({
	navbarIsOpen,
}) => {
	const { isTablet } = useWindowSize()
	const componentClassName = classNames(styles.component, {
		[styles.active]: navbarIsOpen
	})

	const linkClassName = classNames(styles.link, styles.active)

	return (
		<nav className={componentClassName}>
			<ul className={styles.menu}>
				{MenuLinks.map((item, idx) =>
					<li
						key={idx}
						className={styles.item}
					>
						<NavLink
							to={item.href}
							className={({ isActive }) =>
								isActive ? linkClassName : styles.link
							}
						>
							{item.text}
							{isTablet &&
								<span className={styles.icon}>
									<img
										src={arrowIcon}
										alt="Arrow right"
									/>
								</span>
							}
						</NavLink>
					</li>
				)}
			</ul>
		</nav>
	)
}

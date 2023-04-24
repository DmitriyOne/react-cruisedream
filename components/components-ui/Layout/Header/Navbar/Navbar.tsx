import { FC } from 'react'
import classNames from 'classnames'

import { MenuLinks } from '@crdr/constants'
import { useWindowSize } from '@crdr/hooks'

import { ActiveLink, MyImage } from '@crdr/ui'

import arrowIcon from './icons/arrow.svg'
import { NavbarFooter } from './NavbarFooter/NavbarFooter'

import styles from './navbar.module.scss'

interface IProps {
	navbarIsOpen: boolean;
	navIsClose: () => void
}

export const Navbar: FC<IProps> = ({
	navbarIsOpen,
	navIsClose,
}) => {
	const { isTablet } = useWindowSize()
	const componentClassName = classNames(styles.component, {
		[styles.active]: navbarIsOpen,
	})

	return (
		<nav className={componentClassName}>
			<ul className={styles.menu}>
				{MenuLinks.map((item, idx) =>
					<li
						key={idx}
						className={styles.item}
					>
						<ActiveLink
							href={item.href}
							activeClassName={styles.active}
							legacyBehavior
						>
							<a
								className={styles.link}
								href=""
								onClick={isTablet ? navIsClose : undefined}
							>
								{item.text}
								{isTablet &&
									<span className={styles.icon}>
										<MyImage
											src={arrowIcon}
											alt="Arrow right"
										/>
									</span>
								}
							</a>
						</ActiveLink>
					</li>
				)}
			</ul>
			{isTablet && <NavbarFooter />}
		</nav>
	)
}

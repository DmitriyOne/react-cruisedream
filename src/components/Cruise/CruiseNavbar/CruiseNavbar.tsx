import classNames from 'classnames'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { CRUISE_HREFS_ANCHOR } from '../../../constants/cruise-links'

import styles from './cruise-navbar.module.scss'

export const CruiseNavbar = () => {
	return (
		<nav className={styles.component}>
			<ul className={styles.menu}>
				{CRUISE_HREFS_ANCHOR.map((item, idx) =>
					<li key={idx} className={styles.item}>
						<AnchorLink
							href={item.href}
							className={classNames(
								styles.link,
								item.isBooknow ? styles.booknow : '',
							)}
						>
							{item.text}
						</AnchorLink>
					</li>
				)}
			</ul>
		</nav>
	)
}

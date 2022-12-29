import AnchorLink from 'react-anchor-link-smooth-scroll'

import { PAGE_SECTIONS_ANCHOR } from '../../../constants'

import styles from './header-anchors.module.scss'

export const HeaderAnchors = () => {
	return (
		<div className={styles.component}>
			<nav className={styles.nav}>
				<ul className={styles.menu}>
					{PAGE_SECTIONS_ANCHOR.map((item, idx) =>
						<li key={idx} className={styles.item}>
							<AnchorLink
								href={item.href}
								className={styles.link}
							>
								{item.text}
							</AnchorLink>
						</li>
					)}
				</ul>
			</nav>
		</div>
	)
}

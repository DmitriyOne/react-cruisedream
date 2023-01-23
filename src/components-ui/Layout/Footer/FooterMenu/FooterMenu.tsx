import classNames from 'classnames'

import { useAccordion, useWindowSize } from '../../../../hooks'
import { FooterLinks } from '../../../../constants'

import { FooterAccordion } from './FooterAccordion/FooterAccordion'

import arrowIcon from '../icons/arrow-down.svg'

import styles from './footer-menu.module.scss'

export const FooterMenu = () => {
	const { selected, toggle } = useAccordion()
	const { isTablet } = useWindowSize()

	return (
		<nav className={styles.nav}>
			{FooterLinks.map((visible, id) => {
				const isSelected: boolean = selected === id
				const arrowActiveClass = classNames(styles.arrow, {
					[styles.active]: isSelected
				})
				return (
					<ul
						className={styles.menuCol}
						key={id}
					>
						<h5
							className={styles.title}
							onClick={() => toggle(id)}
						>
							{visible.title}
							{isTablet &&
								<span className={arrowActiveClass}>
									<img
										src={arrowIcon}
										alt="Arrow down"
									/>
								</span>
							}
						</h5>
						{visible.items.map((accordion, id) =>
							<FooterAccordion
								item={accordion}
								isOpen={isSelected}
								key={id}
							/>
						)}
					</ul>
				)
			}
			)}
		</nav>
	)
}

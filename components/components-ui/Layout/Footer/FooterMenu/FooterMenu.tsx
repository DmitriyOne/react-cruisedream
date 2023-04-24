import classNames from 'classnames'

import { FooterLinks } from '@crdr/constants'
import { useAccordion, useWindowSize } from '@crdr/hooks'

import { MyImage } from '@crdr/ui/MyImage'

import arrowIcon from '../icons/arrow-down.svg'

import { FooterAccordion } from './FooterAccordion/FooterAccordion'

import styles from './footer-menu.module.scss'

export const FooterMenu = () => {
	const { selected, toggle } = useAccordion()
	const { isTablet } = useWindowSize()

	return (
		<nav className={styles.nav}>
			{FooterLinks.map((visible, id) => {
				const isSelected: boolean = selected === id
				const arrowActiveClass = classNames(styles.arrow, {
					[styles.active]: isSelected,
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
									<MyImage
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

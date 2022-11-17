import { useOpen, useWindowSize } from '../../../../../hooks'
import { CRUISE_SOCIAL_LINKS } from '../../../../../constants'

import { Button } from '../../../../Button'

import arrowIcon from '../icons/arrow.svg'
import phoneIcon from '../icons/phone.svg'

import styles from './center.module.scss'
import { Dropdown } from '../Dropdown'

export const Center = () => {
	const { isTablet } = useWindowSize()
	const { isOpen, onToggle: dropdownIsOpen } = useOpen()

	return (
		<div className={styles.row}>
			{isTablet
				?
				<>
					<Button
						className={styles.centerButton}
						onClick={dropdownIsOpen}
					>
						<img
							className={styles.centerIcon}
							src={phoneIcon}
							alt="Phone icon"
						/>
						<span className={styles.centerArrow}>
							<img
								src={arrowIcon}
								alt="Arrow icon"
							/>
						</span>
					</Button>
					{isOpen && <Dropdown />}
				</>
				:
				<a
					href={CRUISE_SOCIAL_LINKS.phone}
					className={styles.centerPhone}
					target="_blank"
					rel="noreferrer"
				>
					+7 499 653 89 91
				</a>
			}
		</div>
	)
}

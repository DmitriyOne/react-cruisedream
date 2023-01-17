import classNames from 'classnames'

import { Button } from '../../../../../../components-ui/Button'
import { DropdownLinks } from '../../dropdown-links'

import styles from './contact-dropdown.module.scss'

export const ContactDropdown = () => {

	return (
		<div className={styles.component}>
			{DropdownLinks.map(((item, idx) =>
				<Button
					key={idx}
					href={item.href}
					target="_blank"
					className={classNames(styles.link, {
						[styles.sspFont]: item.font === 'ssp'
					})}
				>
					<span className={styles.icon}>
						<img
							src={item.icon}
							alt={item.alt}
						/>
					</span>
					{item.text}
				</Button>
			))}
		</div>
	)
}

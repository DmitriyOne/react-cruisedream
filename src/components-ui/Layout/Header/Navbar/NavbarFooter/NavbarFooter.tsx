import { Button } from '../../../../../components-ui/Button'

import searchIcon from '../../Contacts/icons/search.svg'
import { NavbarFooterLinks } from './navbar-footer'

import styles from './navbar-footer.module.scss'

export const NavbarFooter = () => {
	return (
		<div className={styles.component}>
			<div className={styles.inputWrapper}>
				<span className={styles.inputIcon}>
					<img
						src={searchIcon}
						alt="Search icon"
					/>
				</span>
				<input
					type="text"
					name="search"
					id="search"
					className={styles.input}
					placeholder="Поиск"
				/>
			</div>
			{NavbarFooterLinks.map((item, idx) =>
				<Button
					key={idx}
					href={item.href}
					className={styles.linksWrapper}
				>
					<span className={styles.linksIcon}>
						<img
							src={item.src}
							alt={item.alt}
						/>
					</span>
					<h5 className={styles.linksTitle}>
						{item.text}
					</h5>
				</Button>
			)
			}
		</div >
	)
}

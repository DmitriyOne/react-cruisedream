import { Button } from '../../../../Button'

import searchIcon from '../icons/search.svg'

import styles from './top.module.scss'

export const Top = () => {
	return (
		<div className={styles.row}>
			<Button className={styles.topSearch}>
				<img
					src={searchIcon}
					alt="Whatsapp icon"
				/>
			</Button>
			<div className={styles.topLanguageWrapper}>
				<Button className={styles.topLanguage}>
					ru
				</Button>
				<Button className={styles.topLanguage}>
					en
				</Button>
			</div>
		</div>
	)
}

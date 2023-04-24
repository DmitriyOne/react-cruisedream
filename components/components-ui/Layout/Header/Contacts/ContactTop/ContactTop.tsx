import { useContext } from 'react'

import { HeaderContext } from '@crdr/context'

import { Button, MyImage } from '@crdr/ui'

import searchIcon from '../icons/search.svg'

import styles from './contact-top.module.scss'

export const ContactTop = () => {
	const { onToggleSearch } = useContext(HeaderContext)

	return (
		<div className={styles.row}>
			<Button className={styles.topSearch} onClick={onToggleSearch}>
				<MyImage
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

import styles from './cruise-logo.module.scss'

import logoImage from '../../../assets/images/partners/partner-celebrity.png'

export const CruiseLogo = () => {
	return (
		<div className={styles.logo}>
			<img
				src={logoImage}
				alt="Logo Caribbean"
			/>
		</div>
	)
}

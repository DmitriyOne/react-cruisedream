import styles from './cruise-logo.module.scss'

import { FC } from 'react'

interface IProps {
	logo: string
}

export const CruiseLogo:FC<IProps> = ({logo}) => {
	return (
		<div className={styles.logo}>
			<img
				src={logo}
				alt="Logo Caribbean"
			/>
		</div>
	)
}

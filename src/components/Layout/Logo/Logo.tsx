import { Link } from 'react-router-dom'

import { CRUISE_ROUTES } from '../../../constants'

import logoIcon from './icons/logo.svg'

import styles from './logo.module.scss'

export const Logo = () => {
	return (
		<div className={styles.component}>
			<Link to={CRUISE_ROUTES.HOME}>
				<img
					src={logoIcon}
					alt="Logo Cruisedream"
				/>
			</Link>
		</div>
	)
}

import { FC } from 'react'
import classNames from 'classnames'

import styles from './cruise-logo.module.scss'

interface IProps {
	logo: string
	className?: string
}

export const CruiseLogo: FC<IProps> = ({ logo, className }) => {
	return (
		<div className={classNames(className, styles.logo)}>
			<img
				src={logo}
				alt="Logo Caribbean"
			/>
		</div>
	)
}

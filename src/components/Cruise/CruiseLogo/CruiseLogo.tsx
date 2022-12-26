import { FC } from 'react'
import classNames from 'classnames'

import logo1Src from '../../../assets/images/partners/partner-celebrity.png'

import styles from './cruise-logo.module.scss'

interface IProps {
	className?: string
}

export const CruiseLogo: FC<IProps> = ({ className }) => {
	return (
		<div className={classNames(className, styles.logo)}>
			<img
				src={logo1Src}
				alt="Logo Caribbean"
			/>
		</div>
	)
}

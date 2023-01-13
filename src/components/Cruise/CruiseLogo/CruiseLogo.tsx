import { FC } from 'react'
import classNames from 'classnames'

import logo1Src from '../../../pages/HomePage/sections/partners/images/partner-celebrity.png'

import styles from './cruise-logo.module.scss'

interface IProps {
	className?: string
	src?: string
}

export const CruiseLogo: FC<IProps> = ({ className, src }) => {
	return (
		<div className={classNames(className, styles.logo)}>
			<img
				src={src ? src : logo1Src}
				alt="Logo Caribbean"
			/>
		</div>
	)
}

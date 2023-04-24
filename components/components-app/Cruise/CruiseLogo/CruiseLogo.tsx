import { FC } from 'react'
import classNames from 'classnames'

import { MyImage } from '@crdr/ui'

import logo1Src from '@crdr/image/partners/partner-celebrity.png'

import styles from './cruise-logo.module.scss'

interface IProps {
	className?: string
	src?: string
}

export const CruiseLogo: FC<IProps> = ({ className, src }) => {
	return (
		<div className={classNames(className, styles.logo)}>
			<MyImage
				src={src ? src : logo1Src}
				alt="Logo Caribbean"
				isPriority
			/>
		</div>
	)
}

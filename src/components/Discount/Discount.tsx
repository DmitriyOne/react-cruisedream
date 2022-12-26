import classNames from 'classnames'
import { FC } from 'react'

import styles from './discount.module.scss'

interface IProps {
	percentage?: number
	className?: string
	classNameText?: string
	classNamePercentage?: string
}

export const Discount: FC<IProps> = ({
	percentage,
	className,
	classNameText,
	classNamePercentage
}) => {
	return (
		<div className={classNames(className, styles.component)}>
			<span className={classNames(styles.text, classNameText)}>
				{percentage}
				<span className={classNames(styles.percentage, classNamePercentage)}>
					%
				</span>
			</span>
		</div>
	)
}

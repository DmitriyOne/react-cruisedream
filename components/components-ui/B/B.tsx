import { FC, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './b.module.scss'

interface IProps {
	className?: string
	children: ReactNode;
	fontWeight?: 300 | 500 | 600 | 700;
}

export const B: FC<IProps> = ({
	fontWeight = 600,
	children,
	className,
}) => {
	const componentClassName = classNames(className, {
		[styles.b300]: fontWeight === 300,
		[styles.b500]: fontWeight === 500,
		[styles.b600]: fontWeight === 600,
		[styles.b700]: fontWeight === 700,
	})

	return (
		<b className={componentClassName}>
			{children}
		</b>
	)
}

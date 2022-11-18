import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'

interface IProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement> {
	children: ReactNode
	className?: string
};

export const Button: FC<IProps> = ({
	className,
	children,
	...props
}) => (
	<button
		className={classNames(
			styles.component,
			className,
		)}
		{...props}
	>
		{children}
	</button>
)

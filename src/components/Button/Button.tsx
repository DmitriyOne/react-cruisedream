import { ButtonHTMLAttributes, DetailedHTMLProps, ForwardedRef, forwardRef, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'

interface IProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement> {
	children?: ReactNode
	className?: string
	href?: string;
	target?: '_blank'
};

export const Button = forwardRef(({
	className,
	children,
	href,
	target,
	...props
}: IProps, ref?: ForwardedRef<HTMLButtonElement>
) => {
	if (href) {
		return (
			<a
				href={href}
				className={classNames(
					styles.component,
					className,
				)}
				target={target}
			>
				{children}
			</a>
		)
	}
	return (
		<button
			ref={ref}
			className={classNames(
				styles.component,
				className,
			)}
			{...props}
		>
			{children}
		</button>
	)
}
)

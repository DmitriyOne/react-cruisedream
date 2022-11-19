import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ForwardedRef, forwardRef, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'
import { Link } from 'react-router-dom'

interface IProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement> {
	children?: ReactNode
	className?: string
	href?: string;
	target?: '_blank'
	reactHref?: string
};

export const Button = forwardRef(({
	className,
	children,
	href,
	target,
	reactHref,
	...props
}: IProps, ref?: ForwardedRef<HTMLButtonElement>
) => {
	if (href) {
		return (
			<a
				href={href}
				className={className}
				target={target}
			>
				{children}
			</a>
		)
	}
	if (reactHref) {
		return (
			<Link
				to={reactHref}
				className={className}
				target={target}
			>
				{children}
			</Link>
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

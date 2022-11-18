import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'
import { Link } from 'react-router-dom'

interface IProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement> {
	children: ReactNode
	className?: string
	href?: string;
	target?: '_blank';
	reactHref?: string
};

export const Button: FC<IProps> = ({
	className,
	children,
	href,
	target,
	reactHref,
	...props
}) => {
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
	if(reactHref) {
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

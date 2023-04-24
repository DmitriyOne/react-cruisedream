import { ButtonHTMLAttributes, DetailedHTMLProps, ForwardedRef, forwardRef, ReactNode } from 'react'
import classNames from 'classnames'

import { EBackground, EBorder,EColor, EWidth } from '@crdr/enums'

import styles from './button.module.scss'

interface IProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children?: ReactNode
	className?: string
	href?: string
	target?: '_blank'
	width?: keyof typeof EWidth
	bg?: keyof typeof EBackground
	textColor?: keyof typeof EColor
	border?: keyof typeof EBorder
}

export const Button = forwardRef(({
	className,
	children,
	href,
	target,
	width,
	bg,
	textColor,
	border = 'none',
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

	const buttonClassName = classNames(className, styles.component, {
		[styles.full]: width === 'full',
		[styles.half]: width === 'half',
		[styles.bgBlue]: bg === 'blue',
		[styles.bgTransparent]: bg === 'transparent',
		[styles.textBlue]: textColor === 'blue',
		[styles.textWhite]: textColor === 'white',
		[styles.borderBlue]: border === 'blue',
		[styles.borderTransparent]: border === 'transparent',
		[styles.borderNone]: border === 'none',
	})

	return (
		<button
			ref={ref}
			className={buttonClassName}
			{...props}
		>
			{children}
		</button>
	)
}
)

Button.displayName = 'Button'

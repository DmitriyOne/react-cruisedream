import { DetailedHTMLProps, HTMLAttributes, FC, ReactNode, LegacyRef, forwardRef, ForwardedRef, CSSProperties } from 'react'
import classNames from 'classnames'

import { EDirection, EAlign, EJustify, ESize } from './enums/EContainer'

import styles from './container.module.scss'

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,
	HTMLDivElement> {
	width?: keyof typeof ESize
	direction?: keyof typeof EDirection
	align?: keyof typeof EAlign
	justify?: keyof typeof EJustify
	className?: string
	children: ReactNode
}

export const Container = forwardRef(({
	width = 'container',
	direction = 'row',
	align = 'center',
	justify = 'between',
	className,
	children,
	...props
}: IProps, ref?: ForwardedRef<HTMLDivElement>
) => {
	const componentClassName = classNames(className, {
		[styles.full]: width === 'full',
		[styles.container]: width === 'container',
		[styles.row]: direction === 'row',
		[styles.column]: direction === 'column',
		[styles.alignStart]: align === 'start',
		[styles.alignCenter]: align === 'center',
		[styles.alignEnd]: align === 'end',
		[styles.justifyAround]: justify === 'around',
		[styles.justifyBetween]: justify === 'between',
		[styles.justifyCenter]: justify === 'center',
		[styles.justifyBaseline]: justify === 'baseline'

	})

	return (
		<div
			ref={ref}
			className={componentClassName}
			{...props}
		>
			{children}
		</div>
	)
}
)

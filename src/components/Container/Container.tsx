import { DetailedHTMLProps, HTMLAttributes, FC, ReactNode } from 'react'
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

export const Container: FC<IProps> = ({
	width = 'container',
	direction = 'row',
	align = 'center',
	justify = 'between',
	className,
	children
}) => {
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
		<div className={componentClassName}>
			{children}
		</div>
	)
}

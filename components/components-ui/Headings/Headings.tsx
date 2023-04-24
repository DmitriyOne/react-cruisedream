import { createElement, DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

import { EPosition,ETags } from '@crdr/enums'

import styles from './headings.module.scss'

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	as?: keyof typeof ETags
	className?: string
	children: ReactNode
	align?: keyof typeof EPosition
}

export const Heading: FunctionComponent<IProps> = ({
	as = 'h1',
	className,
	children,
	align = 'left',
	...props
}) => {
	return createElement(
		as,
		{
			className: classNames(
				className,
				styles[align]
			),
			props: { ...props },
		},
		children
	)
}

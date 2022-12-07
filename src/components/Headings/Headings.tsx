import { createElement, FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'

import { ETags, ETextPosition } from '../../model/enums'

import styles from './headings.module.scss'

interface IProps {
	as?: keyof typeof ETags
	className?: string
	children: ReactNode
	align?: keyof typeof ETextPosition
}

export const Heading: FunctionComponent<IProps> = ({
	as = 'h1',
	className,
	children,
	align = 'left'
}) => {
	return createElement(
		as,
		{
			className: classNames(
				className,
				styles[align]
			)
		},
		children
	)
}

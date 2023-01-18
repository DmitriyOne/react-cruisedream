import classNames from 'classnames'
import { FC, ReactElement } from 'react'
import Tippy from '@tippyjs/react'

import { ICruiseRoute } from '../../model/interfaces'
import { Dates } from './Dates/Dates'
import { Route } from './Route/Route'

import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import styles from './my-tooltip.module.scss'

interface IProps {
	isDates?: boolean
	isRoutes?: boolean
	tooltipDates?: string[]
	tooltipRoutes?: ICruiseRoute[]
	classTooltipText?: string
	classTooltipWrapper?: string
	children: ReactElement
}

export const MyTooltip: FC<IProps> = ({
	tooltipDates, children, tooltipRoutes, isDates, isRoutes, classTooltipText, classTooltipWrapper
}) => {

	const DateContent = <Dates tooltipDates={tooltipDates} classText={classNames(classTooltipText, styles.text)} />
	const RoutesContent = <Route tooltipRoutes={tooltipRoutes} classText={classNames(classTooltipText, styles.text)} />

	const content = isDates ? DateContent : isRoutes ? RoutesContent : null

	return (
		<Tippy
			className={classNames(
				classTooltipWrapper,
				styles.component,
				isDates ? styles.date : '',
				isRoutes ? styles.routes : ''
			)}
			content={content}
			interactive={true}
			interactiveBorder={20}
			delay={100}
			disabled={!content}
			arrow={false}
			placement="bottom-start"
			offset={[0, 4]}
			animation="scale"
		>
			{children}
		</Tippy>
	)
}
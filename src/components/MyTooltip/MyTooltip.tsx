import classNames from 'classnames'
import { FC, ReactElement } from 'react'
import Tippy from '@tippyjs/react'

import { ICruiseRoute } from '../../model/interfaces'
import { Dates } from './Dates/Dates'
import { Route } from './Route/Route'

import 'tippy.js/dist/tippy.css'
import styles from './my-tooltip.module.scss'

interface IProps {
	isDates?: boolean
	isRoutes?: boolean
	otherDates?: string[]
	routes?: ICruiseRoute[]
	children: ReactElement
}

export const MyTooltip: FC<IProps> = ({
	otherDates, children, routes, isDates, isRoutes
}) => {

	const DateContent = <Dates otherDates={otherDates} classText={styles.text} />
	const RoutesContent = <Route routes={routes} classText={styles.text} />

	const content = isDates ? DateContent : isRoutes ? RoutesContent : null

	return (
		<Tippy
			className={classNames(
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
		>
			{children}
		</Tippy>
	)
}
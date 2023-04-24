import { FC, useContext, useRef } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import { AlertContext } from '@crdr/context'

import { GeneratorSvg } from '@crdr/ui'

import styles from './alert.module.scss'

interface IProps {
	text?: string
}

export const Alert: FC<IProps> = ({ text }) => {
	const { type, visible } = useContext(AlertContext)
	const nodeRef = useRef(null)

	const className = classNames(styles.component, 'alert', {
		[styles.green]: type === 'ready',
		[styles.red]: type === 'error',
		[styles.warning]: type === 'warning',
	})

	return (
		<CSSTransition
			in={visible}
			timeout={{
				enter: 350,
				exit: 200,
			}}
			classNames={'alert'}
			mountOnEnter
			unmountOnExit
			nodeRef={nodeRef}
		>
			<div className={className} ref={nodeRef}>
				<span className={styles.iconWrapper}>
					<GeneratorSvg id={type} />
				</span>
				<div className={styles.contentWrapper}>
					<h5 className={styles.title}>
						Внимание!
					</h5>
					<span className={styles.text}>
						{text}
					</span>
				</div>
			</div>
		</CSSTransition>
	)
}

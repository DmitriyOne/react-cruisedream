import { FC, useState } from 'react'
import classNames from 'classnames'

import { ITabs } from '../../model/interfaces'

import styles from './tabs.module.scss'

interface IProps {
	items: ITabs[]
	titleClass?: string
	textClass?: string
}

export const Tabs: FC<IProps> = ({ items, titleClass, textClass }) => {
	const [visibleTab, setVisibleTab] = useState<number | null>(items[0].id)

	const titleClassName = classNames(titleClass, styles.title)
	const titleActiveClassName = classNames(titleClass, styles.title, styles.active)
	const textClassName = classNames(textClass, styles.text)

	const listTitles = items.map((item) =>
		<h5
			key={item.id}
			onClick={() => setVisibleTab(item.id)}
			className={visibleTab === item.id ? titleActiveClassName : titleClassName}
		>
			{item.title}
		</h5>
	)

	const listContent = items.map((item) =>
		<div
			key={item.id}
			className={textClassName}
			style={visibleTab === item.id ? {} : { display: 'none' }}
		>
			{item.children}
		</div>
	)

	return (
		<div className={styles.component}>
			<div className={styles.header}>
				{listTitles}
			</div>
			<div className={styles.body}>
				{listContent}
			</div>
		</div>
	)
}

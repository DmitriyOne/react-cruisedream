import { FC, useState } from 'react'
import classNames from 'classnames'

import { ITabs } from '../../model/interfaces'

import styles from './tabs.module.scss'

interface IProps {
	items: ITabs[]
	componentClass?: string
	headerClass?: string
	titleClass?: string
	bodyClass?: string
}

export const Tabs: FC<IProps> = ({ items, componentClass, headerClass, titleClass, bodyClass }) => {
	const [visibleTab, setVisibleTab] = useState<number | null>(items[0].id)

	const componentClassName = classNames(componentClass, styles.component)
	const headerClassName = classNames(headerClass, styles.header)
	const titleClassName = classNames(titleClass, styles.title)
	const titleActiveClassName = classNames(titleClass, styles.title, styles.active)
	const bodyClassName = classNames(bodyClass, styles.body)

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
			className={bodyClassName}
			style={visibleTab === item.id ? {} : { display: 'none' }}
		>
			{item.children}
		</div>
	)

	return (
		<div className={componentClassName}>
			<div className={headerClassName}>
				{listTitles}
			</div>
			{listContent}
		</div>
	)
}

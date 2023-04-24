import { FC, useState } from 'react'
import classNames from 'classnames'

import { ITabs } from '@crdr/interfaces'

import styles from './tabs.module.scss'

interface IProps {
	items: ITabs[]
	componentClass?: string
	headerClass?: string
	headerWrapperClass?: string
	titleClass?: string
	titleActiveClass?: string
	subTitleClass?: string
	bodyClass?: string
	isHeaderWrapper?: boolean
}

export const Tabs: FC<IProps> = ({
	items,
	componentClass,
	headerClass,
	headerWrapperClass,
	titleClass,
	titleActiveClass,
	subTitleClass,
	bodyClass,
	isHeaderWrapper,
}) => {
	const [visibleTab, setVisibleTab] = useState<number | null>(items[0].id)

	const componentClassName = classNames(componentClass, styles.component)
	const headerClassName = classNames(headerClass, styles.header)
	const titleClassName = classNames(titleClass, styles.title)
	const titleActiveClassName = classNames(titleClass, titleActiveClass, styles.title)
	const bodyClassName = classNames(bodyClass, styles.body)

	const listTitles = items.map((item) =>
		<h5
			key={item.id}
			onClick={() => setVisibleTab(item.id)}
			className={visibleTab === item.id ? titleActiveClassName : titleClassName}
		>
			{item.title}
			{item.subtitle &&
				<span className={subTitleClass}>
					{item.subtitle}
				</span>
			}
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
				{isHeaderWrapper
					?
					<div className={headerWrapperClass}>
						{listTitles}
					</div>
					:
					<>
						{listTitles}
					</>
				}
			</div>
			{listContent}
		</div>
	)
}

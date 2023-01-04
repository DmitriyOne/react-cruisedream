import classNames from 'classnames'
import { FC, useState } from 'react'
import { optionSortCurrency, optionSortBy } from '../../../fakedata'
import { ISelect } from '../../../model/interfaces'

import { MySelect } from '../../MySelect'

import styles from './sort-by.module.scss'

interface IProps {
	className?: string
}

export const SortBy: FC<IProps> = ({ className }) => {

	return (
		<div className={classNames(styles.component, className)}>
			<MySelect
				classComponent={styles.select}
				classPrefix="select-sort select-default"
				options={optionSortCurrency!}
				defaultValue={optionSortCurrency[0]}
				isGrouped={false}
			/>
			<MySelect
				classComponent={styles.select}
				classPrefix="select-sort select-default"
				options={optionSortBy!}
				defaultValue={optionSortBy[0]}
				isGrouped={false}
			/>
		</div>
	)
}

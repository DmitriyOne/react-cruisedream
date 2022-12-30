import classNames from 'classnames'
import { FC } from 'react'
import { sortBy, sortCurrency } from '../../../fakedata'

import { MySelect } from '../../MySelect'

import styles from './sort-by.module.scss'

interface IProps {
	className?: string
}

export const SortBy: FC<IProps> = ({ className }) => {

	return (
		<div className={classNames(styles.component, className)}>
			<MySelect
				className={classNames(styles.select, styles.sortCurrency)}
				options={sortCurrency}
				classNamePrefix="select-sort"
				defaultSelect={sortCurrency}
				isMulti={false}
				defaultValue={sortCurrency[0]}
				allowSelectAll={false}
			/>
			<MySelect
				className={styles.select}
				options={sortBy}
				classNamePrefix="select-sort"
				defaultValue={sortBy[0]}
			/>
		</div>
	)
}

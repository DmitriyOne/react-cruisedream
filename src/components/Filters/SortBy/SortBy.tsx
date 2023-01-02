import classNames from 'classnames'
import { FC } from 'react'
import { optionSortCurrency, optionSortBy } from '../../../fakedata'

import { MySelect } from '../../MySelect'

import styles from './sort-by.module.scss'

interface IProps {
	className?: string
}

export const SortBy: FC<IProps> = ({ className }) => {

	return (
		<div className={classNames(styles.component, className)}>
		</div>
	)
}

import { FC, useContext } from 'react'
import classNames from 'classnames'

import { SearchSelectorsContext } from '@crdr/context'

import { MyDatepicker } from '@crdr/plugins'

import styles from './datepicker-selector.module.scss'

interface IProps {
	componentClass?: string
	wrapperClass?: string
	inputClass?: string
	isBorderBottom?: boolean
	isBorderRadius?: boolean
	iconIndentRight?: '0' | '15'
}

export const DatepickerSelector: FC<IProps> = ({
	componentClass,
	wrapperClass,
	inputClass,
	isBorderBottom,
	isBorderRadius,
	iconIndentRight = '0',
}) => {
	const { datepicker } = useContext(SearchSelectorsContext)

	const wrapperClassName = classNames(styles.wrapper, wrapperClass, {
		[styles.borderBottom]: isBorderBottom,
		[styles.borderRadius]: isBorderRadius,
		[styles.iconIndent0]: iconIndentRight === '0',
		[styles.iconIndent15]: iconIndentRight === '15',
	})

	return (
		<MyDatepicker
			componentClassName={componentClass}
			wrapperClassName={wrapperClassName}
			inputClassName={inputClass}
			placeholder="Даты круиза"
			startDate={datepicker.start}
			endDate={datepicker.end}
			onChange={datepicker.onChangeDatepicker}
		/>
	)
}

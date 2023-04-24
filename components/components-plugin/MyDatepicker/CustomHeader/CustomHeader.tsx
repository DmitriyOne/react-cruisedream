import { FC } from 'react'
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'

import { CustomMonth } from './CustomMonth/CustomMonth'
import { CustomYear } from './CustomYear/CustomYear'

import styles from './custom-header.module.scss'

export const CustomHeader: FC<ReactDatePickerCustomHeaderProps> = ({
	...params
}) => {
	return (
		<div className={styles.component}>
			<CustomYear {...params} />
			<CustomMonth {...params} />
		</div>
	)
}

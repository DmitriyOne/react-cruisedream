import { FC } from 'react'
import { Heading } from '../../Headings'

import styles from './cruise-label.module.scss'

interface IProps {
	label: string
}

export const CruiseLabel:FC<IProps> = ({label}) => {

	return (
		<div className={styles.component}>
			<Heading as="h4" className={styles.title}>
				{label}
			</Heading>
		</div>
	)
}

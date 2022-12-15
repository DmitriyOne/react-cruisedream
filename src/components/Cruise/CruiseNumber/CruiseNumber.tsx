import { FC } from 'react'

import styles from './cruise-number.module.scss'

interface IProps {
	id: string
}

export const CruiseNumber: FC<IProps> = ({ id }) => {

	return (
		<div className={styles.component}>
			Номер круиза {id}
		</div>
	)
}

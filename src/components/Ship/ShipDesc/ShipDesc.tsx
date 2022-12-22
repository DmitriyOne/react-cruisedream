import { FC, useState } from 'react'

import { Button } from '../../../components'

import styles from './ship-desc.module.scss'

interface IProps {
	desc: string
}

export const ShipDesc: FC<IProps> = ({ desc }) => {
	const [isReadMore, setIsReadMore] = useState(true)
	const text = desc

	const onToggle = () => {
		setIsReadMore(!isReadMore)
	}

	return (
		<div className={styles.component}>
			<p className={styles.text}>
				{isReadMore ? (text.slice(0, 350) + '...') : text}
			</p>
			<Button
				className={styles.button}
				onClick={onToggle}
			>
				{isReadMore ? 'Читать далее' : ' Скрыть'}
			</Button>
		</div>
	)
}

import { FC, useEffect, useState } from 'react'

import styles from './cruise-timer.module.scss'

interface IProps {
	deadline: string
}

export const CruiseTimer: FC<IProps> = ({ deadline }) => {
	const [days, setDays] = useState(0)
	const [hours, setHours] = useState(0)
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState(0)

	const getTime = (value: string) => {
		const time = Date.parse(deadline) - Date.now()

		setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
		setMinutes(Math.floor((time / 1000 / 60) % 60))
		setSeconds(Math.floor((time / 1000) % 60))
	}

	useEffect(() => {
		const interval = setInterval(() => getTime(deadline), 1000)

		return () => clearInterval(interval)
	}, [deadline])

	return (
		<div className={styles.component}>

			<div className={styles.item}>
				<span className={styles.number}>
					{days < 10 ? '0' + days : days}
				</span>
				<span className={styles.text}>
					дней
				</span>
			</div>
			<div className={styles.dots}>
				:
			</div>
			<div className={styles.item}>
				<span className={styles.number}>
					{hours < 10 ? '0' + hours : hours}
				</span>
				<span className={styles.text}>
					часов
				</span>
			</div>
			<div className={styles.dots}>
				:
			</div>
			<div className={styles.item}>
				<span className={styles.number}>
					{minutes < 10 ? '0' + minutes : minutes}
				</span>
				<span className={styles.text}>
					минут
				</span>
			</div>
			<div className={styles.dots}>
				:
			</div>
			<div className={styles.item}>
				<span className={styles.number}>
					{seconds < 10 ? '0' + seconds : seconds}
				</span>
				<span className={styles.text}>
					секунд
				</span>
			</div>
		</div>
	)
}

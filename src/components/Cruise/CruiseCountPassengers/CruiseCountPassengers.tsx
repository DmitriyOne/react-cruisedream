import { useState } from 'react'

import adultIcon from './icons/adult.svg'
import childIcon from './icons/child.svg'

import { B, Button } from '../../../components'

import styles from './cruise-count-passengers.module.scss'

export const CruiseCountPassengers = () => {
	const [countAdult, setCountAdult] = useState(2)
	const [countChild, setCountChild] = useState(0)

	const incrementAdult = () => {
		setCountAdult(prevCount => prevCount + 1)
	}

	const decrementAdult = () => setCountAdult(prevCount => {
		if (prevCount <= 0) return 0
		return prevCount - 1
	})

	const incrementChild = () => {
		setCountChild(prevCount => prevCount + 1)
	}

	const decrementChild = () => setCountChild(prevCount => {
		if (prevCount <= 0) return 0
		return prevCount - 1
	})

	return (
		<div className={styles.component}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<span className={styles.adultIcon}>
						<img src={adultIcon} alt="Adult Icon" />
					</span>
					<div className={styles.countWrapper}>
						<Button
							className={styles.countButton}
							onClick={decrementAdult}
						>
							-
						</Button>
						<B fontWeight={600} className={styles.countText}>
							{countAdult}
						</B>
						<Button
							className={styles.countButton}
							onClick={incrementAdult}
						>
							+
						</Button>
					</div>
				</div>
				<span className={styles.label}>
					Взрослые <br /> 18+
				</span>
			</div>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<span className={styles.childIcon}>
						<img src={childIcon} alt="Child Icon" />
					</span>
					<div className={styles.countWrapper}>
						<Button
							className={styles.countButton}
							onClick={decrementChild}
						>
							-
						</Button>
						<B fontWeight={600} className={styles.countText}>
							{countChild}
						</B>
						<Button
							className={styles.countButton}
							onClick={incrementChild}
						>
							+
						</Button>
					</div>
				</div>
				<span className={styles.label}>
					Дети <br /> 0-18
				</span>
			</div>

		</div>
	)
}

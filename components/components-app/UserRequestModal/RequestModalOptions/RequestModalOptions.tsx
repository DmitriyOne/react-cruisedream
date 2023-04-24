import classNames from 'classnames'

import { B, MyImage } from '@crdr/ui'

import datepickerIcon from '../icons/datepicker.svg'
import markerIcon from '../icons/marker.svg'
import moonIcon from '../icons/moon.svg'
import shipIcon from '../icons/ship.svg'

import styles from '../user-request-modal.module.scss'

export const RequestModalOptions = () => {
	return (
		<div className={styles.optionsWrapper}>
			<div className={styles.optionsCol}>
				<div className={styles.optionsItem}>
					<span className={styles.optionsIcon}>
						<MyImage
							src={shipIcon} alt="Ship icon"
						/>
					</span>
					<div className={styles.optionsContent}>
						<span className={styles.text1}>
							Корабль
						</span>
						<B fontWeight={600} className={classNames(styles.text2, styles.optionsSubtitle)}>
							Queen Anne
						</B>
					</div>
				</div>
				<div className={styles.optionsItem}>
					<span className={styles.optionsIcon}>
						<MyImage
							src={datepickerIcon}
							alt="Datepicker icon"
						/>
					</span>
					<div className={styles.optionsContent}>
						<span className={styles.text1}>
							Дата отправления
						</span>
						<B fontWeight={600} className={classNames(styles.text2, styles.optionsSubtitle)}>
							10 Мая 2024
						</B>
					</div>
				</div>
			</div>

			<div className={styles.optionsCol}>
				<div className={styles.optionsItem}>
					<span className={styles.optionsIcon}>
						<MyImage
							src={markerIcon}
							alt="Marker icon"
						/>
					</span>
					<div className={styles.optionsContent}>
						<span className={styles.text1}>
							Порт
						</span>
						<B fontWeight={600} className={classNames(styles.text2, styles.optionsSubtitle)}>
							Southampton
						</B>
					</div>
				</div>
				<div className={styles.optionsItem}>
					<span className={styles.optionsIcon}>
						<MyImage
							src={moonIcon}
							alt="Moon icon"
						/>
					</span>
					<div className={styles.optionsContent}>
						<span className={styles.text1}>
							Продолжительность
						</span>
						<B fontWeight={600} className={classNames(styles.text2, styles.optionsSubtitle)}>
							14 ночей
						</B>
					</div>
				</div>
			</div>

		</div>

	)
}

import classNames from 'classnames'
import { FC, useState } from 'react'

import { B, Heading, Modal } from '../../components-ui'

import shipIcon from './icons/ship.svg'
import markerIcon from './icons/marker.svg'
import datepickerIcon from './icons/datepicker.svg'
import moonIcon from './icons/moon.svg'

import styles from './user-request-modal.module.scss'

interface IProps {
	onClosed?: () => void;
};

export const UserRequestModal: FC<IProps> = ({
	onClosed,
}) => {
	const [shown, setShown] = useState(true)

	const handleModalClose = () => {
		setShown(false)

		if (onClosed) {
			onClosed()
		}
	}

	return (
		<Modal isShow={shown} onClose={handleModalClose}>
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					<Heading as="h2" className={styles.title}>
						ВАШ ЗАПРОС
					</Heading>
					<B fontWeight={500} className={classNames(styles.text1, styles.year)}>
						2024
					</B>
					<B fontWeight={500} className={classNames(styles.text1, styles.deckAndCabin)}>
						Палуба 1 - Каюта(IB)
					</B>
				</div>
				<div className={styles.headerRight}>
					<B fontWeight={500} className={classNames(styles.text1)}>
						Номер круиза
					</B>
					<B fontWeight={600} className={classNames(styles.text1, styles.numberCruise)} >
						2009730
					</B>
				</div>
			</div>

			<div className={styles.optionsWrapper}>
				<div className={styles.optionsCol}>
					<div className={styles.optionsItem}>
						<span className={styles.optionsIcon}>
							<img src={shipIcon} alt="Ship icon" />
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
							<img src={datepickerIcon} alt="Datepicker icon" />
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
							<img src={markerIcon} alt="Marker icon" />
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
							<img src={moonIcon} alt="Moon icon" />
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

		</Modal>
	)
}

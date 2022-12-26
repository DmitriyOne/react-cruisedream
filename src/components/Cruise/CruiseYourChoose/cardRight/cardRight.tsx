import { B, Button } from '../../../../components'

import { ShipName } from '../../../Ship'
import { CruiseLogo, CruisePrice } from '../../../Cruise'

import styles from './card-right.module.scss'
import classNames from 'classnames'

export const CardRight = () => {
	return (
		<>
			<div className={styles.row}>
				<div className={styles.col}>
					<B fontWeight={600} className={styles.cabins}>
						Каюта с балконом
					</B>
					<span className={styles.currentCabins}>
						Каюта с балконом с ограниченным видом
					</span>
				</div>
				<div className={styles.col}>
					<Button className={styles.changeButton}>
						изменить
					</Button>
				</div>
				<div className={styles.col}>
					<CruiseLogo className={styles.logo} />
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<B fontWeight={600} className={styles.passengers}>
						2 взрослых, 1 ребенок
					</B>
				</div>
				<div className={styles.col}>
					<Button className={styles.changeButton}>
						изменить
					</Button>
				</div>
				<div className={styles.col}>
					<ShipName classNameText={styles.shipName} />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					<B fontWeight={600} className={styles.date}>
						01.03.2023-08.03.2023
					</B>
				</div>
				<div className={styles.col}>
					<Button className={styles.changeButton}>
						изменить
					</Button>
				</div>
				<div className={styles.col}>
					<B fontWeight={700} className={styles.price}>
						1 725 $
					</B>
				</div>
			</div>


			<div className={styles.buttonsWrapper}>
				<div className={styles.buttonCol}>
					<Button
						className={styles.button}
						width="full"
						bg="transparent"
						textColor="blue"
						border="blue"
					>
						ЗАПРОСИТЬ
					</Button>
					<ul className={styles.list}>
						<li className={classNames(styles.listItem, styles.minus)}>
							Не обязательный запрос
						</li>
						<li className={classNames(styles.listItem, styles.minus)}>
							Менеджер Вам перезвонит
						</li>
					</ul>
				</div>
				<div className={styles.buttonCol}>
					<Button
						className={styles.button}
						width="full"
						bg="blue"
						textColor="white"
						border="transparent"
					>
						ЗАБРОНИРОВАТЬ
					</Button>
					<ul className={styles.list}>
						<li className={classNames(styles.listItem, styles.plus)}>
							Онлайн бронирование
						</li>
						<li className={classNames(styles.listItem, styles.plus)}>
							Лучшая цена
						</li>
					</ul>

				</div>
			</div>







		</>
	)
}

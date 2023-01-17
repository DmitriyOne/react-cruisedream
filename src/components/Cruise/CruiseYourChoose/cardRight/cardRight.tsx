import AnchorLink from 'react-anchor-link-smooth-scroll'

import { B, Button } from '../../../../components-ui'

import { ShipName } from '../../../Ship'
import { CruiseDates, CruiseLogo } from '../../../Cruise'

import passengersIcon from '../images/adult.svg'

import styles from './card-right.module.scss'
import classNames from 'classnames'
import { useWindowSize } from '../../../../hooks'

export const CardRight = () => {
	const { isMobile } = useWindowSize()


	const isShowBlock = !isMobile
	return (
		<>
			{isMobile && <CruiseLogo className={styles.logo} />}
			{isMobile && <ShipName isIcon />}
			<div className={styles.row}>
				<div className={styles.col}>
					{isMobile &&
						<span className={styles.cabinsCode}>
							A1
						</span>
					}
					<div>
						<B fontWeight={600} className={styles.cabins}>
							Каюта с балконом
						</B>
						<span className={styles.currentCabins}>
							Каюта с балконом с ограниченным видом
						</span>
					</div>
				</div>
				<div className={styles.col}>
					<AnchorLink href="#cabins" className={styles.changeButton}>
						изменить
					</AnchorLink>
				</div>
				{isShowBlock &&
					<div className={styles.col}>
						<CruiseLogo className={styles.logo} />
					</div>
				}
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					{isMobile &&
						<span className={styles.passengersIcon}>
							<img src={passengersIcon} alt="Passengers icon" />
						</span>
					}
					<B fontWeight={600} className={styles.passengers}>
						2 взрослых, 1 ребенок
					</B>
				</div>
				<div className={styles.col}>
					<AnchorLink href="#count-passengers" className={styles.changeButton}>
						изменить
					</AnchorLink>
				</div>
				{isShowBlock &&
					<div className={styles.col}>
						<ShipName classNameText={styles.shipName} />
					</div>
				}
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					<CruiseDates classComponent={styles.dateWrapper} classNameText={styles.date} isOnlyStartDate />
				</div>
				<div className={styles.col}>
					<AnchorLink href="#cabins-dates" className={styles.changeButton}>
						изменить
					</AnchorLink>
				</div>
				{isShowBlock &&
					<div className={styles.col}>
						<B fontWeight={700} className={styles.price}>
							1 725 $
						</B>
					</div>
				}
			</div>
			{isMobile &&
				<B fontWeight={700} className={styles.price}>
					1 725 $
				</B>
			}

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

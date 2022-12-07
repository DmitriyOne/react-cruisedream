import classNames from 'classnames'

import { useWindowSize } from '../../../hooks'

import { B, Button, Discount } from '../../../components'

import styles from './cruise-price.module.scss'

export const CruisePrice = () => {
	const { isMobile } = useWindowSize()

	return (
		<>
			{!isMobile &&
				<B className={classNames(styles.text, styles.darker)}>
					Внутренняя каюта
				</B>
			}
			<div className={styles.priceWrapper}>
				<B fontWeight={700} className={styles.price}>
					от 1 590 $
				</B>
				{!isMobile &&
					<Discount
						percentage={25}
						className={styles.discount}
						classNameText={styles.discountText}
						classNamePercentage={styles.discountPercentage}
					/>
				}
			</div>
			{!isMobile &&
				<B className={styles.text}>
					за человека
				</B>
			}
			<Button className={styles.button}>
				ВЫБРАТЬ
			</Button>
		</>
	)
}

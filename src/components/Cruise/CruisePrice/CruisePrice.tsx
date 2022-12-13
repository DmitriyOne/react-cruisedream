import { FC } from 'react'
import classNames from 'classnames'

import { useWindowSize } from '../../../hooks'

import { B, Button, Discount } from '../../../components'

import styles from './cruise-price.module.scss'

interface IProps {
	priceFrom: string
	isSale: boolean
	sale?: number
}

export const CruisePrice:FC<IProps> = ({priceFrom, isSale, sale}) => {
	const { isMobile } = useWindowSize()

	const isShowDiscount = !isMobile && isSale
	return (
		<>
			{!isMobile &&
				<B className={classNames(styles.text, styles.darker)}>
					Внутренняя каюта
				</B>
			}
			<div className={styles.priceWrapper}>
				<B fontWeight={700} className={styles.price}>
					от {priceFrom}
				</B>
				{isShowDiscount &&
					<Discount
						percentage={sale}
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

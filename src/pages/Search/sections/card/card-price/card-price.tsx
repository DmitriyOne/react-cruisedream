import classNames from 'classnames'

import logoImage from '../../../../../assets/images/partners/partner-caribbean.png'

import { B, Button, Discount } from '../../../../../components'
import { useWindowSize } from '../../../../../hooks'

import styles from './card-price.module.scss'

export const CardPrice = () => {
	const { isMobile } = useWindowSize()

	return (
		<div className={styles.component}>
			{!isMobile &&
				<div className={styles.logo}>
					<img
						src={logoImage}
						alt="Logo Caribbean"
					/>
				</div>
			}
			<div className={styles.bottom}>
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
			</div>
		</div>
	)
}

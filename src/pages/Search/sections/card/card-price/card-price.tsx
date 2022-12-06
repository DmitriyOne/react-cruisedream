import classNames from 'classnames'

import logoImage from '../../../../../assets/images/partners/partner-caribbean.png'

import { B, Button } from '../../../../../components'

import styles from './card-price.module.scss'

export const CardPrice = () => {
	return (
		<div className={styles.component}>

			<div className={styles.logo}>
				<img
					src={logoImage}
					alt="Logo Caribbean"
				/>
			</div>

			<div className={styles.bottom}>
				<B className={classNames(styles.text, styles.darker)}>
					Внутренняя каюта
				</B>
				<B fontWeight={700} className={styles.price}>
					от 1 590 $
				</B>
				<B className={styles.text}>
					за человека
				</B>
				<Button className={styles.button}>
					ВЫБРАТЬ
				</Button>
			</div>
		</div>
	)
}

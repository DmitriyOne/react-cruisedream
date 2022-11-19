import { FC } from 'react'
import { B, Button } from '../../../../components'
import { CRUISE_ROUTES } from '../../../../constants'
import styles from './context.module.scss'

enum ETextDirection {
	left = 'left',
	center = 'center',
	right = 'right'
}

interface IProps {
	variant?: keyof typeof ETextDirection
}

export const IntroContext: FC<IProps> = ({ variant }) => {
	return (
		<div className={styles.component}>
			<h1 className={styles.title}>
				<span className={styles.textSale}>
					АКЦИЯ
					<span className={styles.textSaleDamion}>
						-30%
					</span>
				</span>
				НА СЕМЕЙНЫЙ КРУИЗ
			</h1>
			<Button
				reactHref={CRUISE_ROUTES.TO_BOOK}
				className={styles.button}
			>
				<B fontWeight={500}>
					ЗАБРОНИРОВАТЬ
				</B>
			</Button>
		</div>
	)
}

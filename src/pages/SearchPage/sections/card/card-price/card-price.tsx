import { CruiseLogo, CruisePrice } from '../../../../../components/Cruise'
import { useWindowSize } from '../../../../../hooks'

import styles from './card-price.module.scss'

export const CardPrice = () => {
	const { isMobile } = useWindowSize()

	return (
		<div className={styles.component}>
			{!isMobile &&
				<CruiseLogo />
			}
			<div className={styles.bottom}>
				<CruisePrice
					buttonsRowClass={styles.rowButton}
					buttonClass={styles.button}
				/>
			</div>
		</div>
	)
}

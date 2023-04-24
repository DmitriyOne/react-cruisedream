import { useWindowSize } from '@crdr/hooks'

import { CruiseLogo, CruisePrice } from '@crdr/components'

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

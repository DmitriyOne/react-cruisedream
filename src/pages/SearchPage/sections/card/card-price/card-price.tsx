import { FC } from 'react'
import { CruiseLogo, CruisePrice } from '../../../../../components/Cruise'
import { useWindowSize } from '../../../../../hooks'
import { IPrice } from '../interfaces/IPrice'

import styles from './card-price.module.scss'

export const CardPrice: FC<IPrice> = ({ logo, priceFrom, isSale, sale, cruiseId }) => {
	const { isMobile } = useWindowSize()

	return (
		<div className={styles.component}>
			{!isMobile &&
				<CruiseLogo logo={logo} />
			}
			<div className={styles.bottom}>
				<CruisePrice
					buttonsRowClass={styles.rowButton}
					buttonClass={styles.button}
					priceFrom={priceFrom}
					isSale={isSale}
					sale={sale}
					cruiseId={cruiseId}
				/>
			</div>
		</div>
	)
}

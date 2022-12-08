import { FC } from 'react'
import { CruiseLogo, CruisePrice } from '../../../../../components/Cruise'
import { useWindowSize } from '../../../../../hooks'

import styles from './card-price.module.scss'

interface IProps {
	logo: string
	priceFrom: string
	isSale: boolean
	sale?: number
}

export const CardPrice: FC<IProps> = ({ logo, priceFrom, isSale, sale }) => {
	const { isMobile } = useWindowSize()

	return (
		<div className={styles.component}>
			{!isMobile &&
				<CruiseLogo logo={logo} />
			}
			<div className={styles.bottom}>
				<CruisePrice
					priceFrom={priceFrom}
					isSale={isSale}
					sale={sale}
				/>
			</div>
		</div>
	)
}

import classNames from 'classnames'
import { FC } from 'react'
import { CruiseIncludedIcon, CruisePrice } from '../../../../../../components/Cruise'
import { useWindowSize } from '../../../../../../hooks'
import { IIncludedIcon } from '../../../../../../model/interfaces'

import styles from './row-bottom.module.scss'

interface IProps {
	componentClass?: string
	columnLeftClass?: string
	columnRightClass?: string
	icons: IIncludedIcon[]
	isSale: boolean
	sale?: number
}

export const RowBottom: FC<IProps> = ({
	componentClass,
	columnLeftClass,
	columnRightClass,
	icons,
	isSale,
	sale
}) => {
	const { isMobile } = useWindowSize()

	const isShowOnDesktop = !isMobile

	return (
		<div
			className={componentClass}
		>
			<div className={columnLeftClass}>
				{isShowOnDesktop &&
					<CruiseIncludedIcon
						classNameItem={styles.includedItem}
						classNameIcon={styles.includedIcon}
						icons={icons}
					/>
				}
			</div>
			<div className={classNames(columnRightClass, styles.column)}>
				<CruisePrice
					buttonsRowClass={styles.rowButtons}
					buttonClass={styles.button}
					priceClass={styles.price}
					priceSpanClass={styles.priceSpan}
					textClass={styles.priceBottomText}
					modalButtonClass={styles.priceModalBtn}
					discountClass={styles.discount}
					priceFrom={'150 000'}
					isSale={isSale}
					sale={sale}
					isCruisePage
					buttonText="ЗАБРОНИРОВАТЬ"
				/>
			</div>
		</div>

	)
}

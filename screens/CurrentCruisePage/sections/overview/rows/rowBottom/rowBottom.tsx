import { FC } from 'react'
import classNames from 'classnames'

import { useWindowSize } from '@crdr/hooks'

import { CruiseIncludedIcon, CruisePrice } from '@crdr/components'

import styles from './row-bottom.module.scss'

interface IProps {
	componentClass?: string
	columnLeftClass?: string
	columnRightClass?: string
}

export const RowBottom: FC<IProps> = ({
	componentClass,
	columnLeftClass,
	columnRightClass,
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
					isCruisePage
					buttonText="ЗАБРОНИРОВАТЬ"
				/>
			</div>
		</div>

	)
}

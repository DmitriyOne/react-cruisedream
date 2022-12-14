/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { useWindowSize } from '../../../hooks'
import { CRUISE_ROUTES } from '../../../constants'

import { B, Button, Discount } from '../../../components'

import styles from './cruise-price.module.scss'

enum EWidth {
	full = 'full',
	half = 'half'
}

enum EBackground {
	blue = 'blue',
	transparent = 'transparent'
}

enum EColor {
	blue = 'blue',
	white = 'white'
}

interface IProps {
	priceFrom: string
	isSale: boolean
	sale?: number

	buttonsRowClass?: string
	buttonText?: string
	buttonClass?: string
	buttonWidth?: keyof typeof EWidth
	buttonBackground?: keyof typeof EBackground
	buttonTextColor?: keyof typeof EColor

	modalButtonClass?: string
	modalButtonBg?: keyof typeof EBackground
	modalButtonTextColor?: keyof typeof EColor

	priceClass?: string
	priceSpanClass?: string

	discountClass?: string

	textClass?: string

	onClickСhoose?: () => void
	onShowModal?: () => void

	isCruisePage?: boolean
}

export const CruisePrice: FC<IProps> = ({ priceFrom,
	isSale,
	sale,
	buttonsRowClass,
	buttonText = 'ВЫБРАТЬ',
	buttonClass,
	buttonWidth = 'full',
	buttonBackground = 'blue',
	buttonTextColor = 'white',
	modalButtonClass,
	modalButtonBg = 'transparent',
	modalButtonTextColor = 'blue',
	priceClass,
	priceSpanClass,
	discountClass,
	textClass,
	onClickСhoose,
	onShowModal,
	isCruisePage,
}) => {
	const { isMobile } = useWindowSize()

	const classNameButton = classNames(buttonClass, styles.button, {
		[styles.full]: buttonWidth === 'full',
		[styles.half]: buttonWidth === 'half',
		[styles.bgBlue]: buttonBackground === 'blue',
		[styles.bgTransparent]: buttonBackground === 'transparent',
		[styles.textBlue]: buttonTextColor === 'blue',
		[styles.textWhite]: buttonTextColor === 'white',
	})

	const classNameModalButton = classNames(modalButtonClass, buttonClass, styles.button, {
		[styles.full]: buttonWidth === 'full',
		[styles.half]: buttonWidth === 'half',
		[styles.bgBlue]: modalButtonBg === 'blue',
		[styles.bgTransparent]: modalButtonBg === 'transparent',
		[styles.textBlue]: modalButtonTextColor === 'blue',
		[styles.textWhite]: modalButtonTextColor === 'white',
	})

	const classNamePrice = classNames(priceClass, styles.price)

	const classNameRowButtons = classNames(buttonsRowClass, styles.rowButtons, {
		[styles.flex]: isCruisePage
	})

	const classNameText = classNames(textClass,styles.text)

	const isShowDiscount = !isMobile && isSale
	const isShowTopBlock = !isMobile && !isCruisePage
	const isShowBottomBlock = !isMobile && isCruisePage	
	return (
		<>
			{isShowTopBlock &&
				<B className={classNames(styles.text, styles.darker)}>
					Внутренняя каюта
				</B>
			}
			<div className={styles.priceWrapper}>
				<B fontWeight={700} className={classNamePrice}>
					<span className={classNames(priceSpanClass, styles.priceSpan)}>
						от
					</span>
					{priceFrom}$
				</B>
				{isShowDiscount &&
					<Discount
						percentage={sale}
						className={classNames(discountClass, styles.discount)}
						classNameText={styles.discountText}
						classNamePercentage={styles.discountPercentage}
					/>
				}
			</div>
			{isShowBottomBlock &&
				<B className={classNameText}>
					{isCruisePage ? 'Внутренняя каюта за человека' : 'за человека'}
				</B>
			}
			<div className={classNameRowButtons}>
				{isCruisePage &&
					<Button
						className={classNameModalButton}
						onClick={onShowModal}
					>
						ЗАПРОСИТЬ
					</Button>
				}
				<Link
					to={CRUISE_ROUTES.CRUISE}
					className={classNameButton}
					onClick={onClickСhoose}
				>
					{buttonText}
				</Link>
			</div>
		</>
	)
}

import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { CRUISE_NAVBAR } from '@crdr/constants'
import { useModal,useNumberWithSpaces, useWindowSize } from '@crdr/hooks'

import { EBackground, EColor,EWidth } from '@crdr/enums'

import { Discount } from '@crdr/components'
import { B, Button } from '@crdr/ui'

import { UserRequestModal } from '../../UserRequestModal'

import styles from './cruise-price.module.scss'

interface IProps {
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

	isCruisePage?: boolean
	isOnlyPrice?: boolean
}

export const CruisePrice: FC<IProps> = ({
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
	isCruisePage,
	isOnlyPrice,
}) => {
	const { isMobile } = useWindowSize()
	const { handlerSpaces } = useNumberWithSpaces()
	const { handleModalOpen, isShowModal, handleModalClose } = useModal()

	const onShowModal = (e: any) => {
		e.preventDefault()
		handleModalOpen()
	}

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
		[styles.flex]: isCruisePage,
	})

	const classNameText = classNames(textClass, styles.text)

	const isShowDiscount = !isMobile
	const isShowTopBlock = !isMobile && !isCruisePage
	const isShowBottomBlock = !isMobile && isCruisePage
	return (
		<>
			{isOnlyPrice
				?
				<B fontWeight={700} className={classNamePrice}>
					<span className={classNames(priceSpanClass, styles.priceSpan)}>
						от
					</span>
					{handlerSpaces(1400)}&nbsp;$
				</B>
				:
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
							{handlerSpaces(1540)}&nbsp;$
						</B>
						{isShowDiscount &&
							<Discount
								percentage={50}
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
						{isCruisePage
							?
							<>
								<Button
									className={classNameModalButton}
									onClick={(e) => onShowModal(e)}
								>
									ЗАПРОСИТЬ
								</Button>
								<AnchorLink
									href={CRUISE_NAVBAR.cabins}
									className={classNameButton}
								>
									{buttonText}
								</AnchorLink>
							</>
							:
							<Link
								href={'/cruise/1'}
								className={classNameButton}
							>
								{buttonText}
							</Link>
						}
					</div>
				</>
			}

			{isShowModal && <UserRequestModal onClosed={handleModalClose} />}
		</>
	)
}

import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { ICard } from '@crdr/interfaces'

import { CruiseLogo } from '@crdr/components'
import { B, Heading, MyImage } from '@crdr/ui'

import styles from './card-default.module.scss'

interface IProps extends ICard {
	titleAlign?: 'start' | 'center'
	isSubtitleIndent?: boolean
	isSubtitleJustify?: boolean
	imageHeight?: 'l' | 's'
	bodyPadding: 'l' | 's'
	buttonColumn?: '1' | '2'
	buttonText?: string
	buttonFontSize?: 'l' | 's'
	isButtonHoverEffect?: boolean
}

export const CardDefault: FC<IProps> = ({
	titleAlign,
	isSubtitleIndent,
	isSubtitleJustify,
	imageHeight = 's',
	bodyPadding,
	buttonColumn = '1',
	buttonFontSize = 's',
	buttonText = 'ВЫБРать',
	isButtonHoverEffect,
	...card
}) => {

	const imageWrapperClassName = classNames(styles.imageWrapper, {
		[styles.imageHeightL]: imageHeight === 'l',
		[styles.imageHeightS]: imageHeight === 's',
	})

	const bodyClassName = classNames(styles.body, {
		[styles.bodyPaddingL]: bodyPadding === 'l',
		[styles.bodyPaddingS]: bodyPadding === 's',
	})

	const headerClassName = classNames(styles.header, {
		[styles.center]: titleAlign === 'center',
		[styles.start]: titleAlign === 'start',
	})

	const titleClassName = classNames(styles.title, {
		[styles.paddingNull]: card.created || card.logo,
	})

	const subtitleClassName = classNames(styles.subtitle, {
		[styles.indent]: isSubtitleIndent,
		[styles.justify]: isSubtitleJustify,
	})

	const buttonClassName = classNames(styles.button, {
		[styles.buttonWithHover]: isButtonHoverEffect,
		[styles.buttonFull]: buttonColumn === '1',
		[styles.buttonHalf]: buttonColumn === '2',
		[styles.buttonFontSizeL]: buttonFontSize === 'l',
		[styles.buttonFontSizeS]: buttonFontSize === 's',
	})

	const footerClassName = classNames(styles.footer, {
		[styles.footerPaddingMobile]: buttonColumn === '2',
	})

	return (
		<div className={styles.component}>
			<div className={imageWrapperClassName}>
				<MyImage
					imageClass={styles.image}
					src={card.image.src}
					alt={card.image.alt}
				/>
			</div>
			<div className={bodyClassName}>
				<div className={headerClassName}>
					<Heading as="h4">
						<B fontWeight={600} className={titleClassName}>
							{card.title}
						</B>
					</Heading>
					{card.logo && <CruiseLogo src={card.logo} className={styles.logo} />}
				</div>
				{card.fleet &&
					<B fontWeight={700} className={styles.fleetCompany}>
						Флот: {card.fleet}
					</B>
				}
				{card.created &&
					<div className={styles.row}>
						<B fontWeight={700} className={styles.fleetCompany}>
							год постройки: {card.created}
						</B>
						<B fontWeight={700} className={styles.fleetCompany}>
							год реновации: {card.update}
						</B>
					</div>
				}
				<p className={subtitleClassName}>
					{card.subtitle}
				</p>
				{card.tags &&
					<B fontWeight={600} className={styles.tags}>
						{card.tags}
					</B>
				}
			</div>
			<div className={footerClassName}>
				{buttonColumn === '2' &&
					<Link
						href={'#'}
						className={buttonClassName}
					>
						ПОДРОБНЕЕ
					</Link>
				}
				<Link
					href={`${card.href}/1`}
					className={buttonClassName}
				>
					{buttonText}
				</Link>
			</div>
		</div>
	)
}

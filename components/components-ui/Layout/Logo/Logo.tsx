import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { CRUISE_ROUTES } from '@crdr/constants'
import { useWindowSize } from '@crdr/hooks'

import { B, MyImage } from '@crdr/ui'

import logoBlueIcon from './icons/logo-blue.svg'
import logoWhiteIcon from './icons/logo-white.svg'

import styles from './logo.module.scss'

interface IProps {
	className?: string
	variant?: 'white' | 'blue'
	subtitle?: string
	subtitleClass?: string
	navIsClose?: () => void
}

export const Logo: FC<IProps> = ({
	className,
	variant = 'blue',
	subtitle,
	subtitleClass,
	navIsClose,
}) => {
	const { isTablet } = useWindowSize()

	return (
		<div
			className={classNames(styles.component, className)}
		>
			<Link
				href={CRUISE_ROUTES.HOME}
				onClick={isTablet ? navIsClose : undefined}
				passHref
				as={CRUISE_ROUTES.HOME}
			>
				<MyImage
					src={variant === 'blue' ? logoBlueIcon : logoWhiteIcon}
					alt="Logo Cruisedream"
					isPriority
				/>

			</Link>
			{subtitle
				&& <B className={subtitleClass}>
					{subtitle}
				</B>
			}
		</div>
	)
}

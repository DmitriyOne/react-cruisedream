import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { CRUISE_ROUTES } from '../../../constants'
import { B } from '../../B'

import logoBlueIcon from './icons/logo-blue.svg'
import logoWhiteIcon from './icons/logo-white.svg'

import styles from './logo.module.scss'

interface IProps {
	className?: string
	variant?: 'white' | 'blue'
	subtitle?: string
	subtitleClass?: string
}

export const Logo: FC<IProps> = ({
	className,
	variant = 'blue',
	subtitle,
	subtitleClass
}) => {

	return (
		<div
			className={classNames(styles.component, className)}
		>
			<Link to={CRUISE_ROUTES.HOME}>
				<img
					src={variant === 'blue' ? logoBlueIcon : logoWhiteIcon}
					alt="Logo Cruisedream"
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

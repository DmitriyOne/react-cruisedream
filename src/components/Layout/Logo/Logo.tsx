import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { CRUISE_ROUTES } from '../../../constants'

import logoBlueIcon from './icons/logo-blue.svg'
import logoWhiteIcon from './icons/logo-white.svg'

import styles from './logo.module.scss'

interface IProps {
	className?: string
	variant?: 'white' | 'blue'
}

export const Logo: FC<IProps> = ({ 
	className,
	variant = 'blue',
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
		</div>
	)
}

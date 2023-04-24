import { FC } from 'react'
import classNames from 'classnames'

import { Heading } from '@crdr/ui'

import styles from './cruise-name.module.scss'

interface IProps {
	className?: string
}

export const CruiseName: FC<IProps> = ({ className }) => {

	return (
		<Heading as="h3" className={classNames(styles.component, className)}>
			Жемчужины Персидского залива
		</Heading>
	)
}

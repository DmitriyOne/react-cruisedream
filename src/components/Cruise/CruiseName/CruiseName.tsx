import classNames from 'classnames'
import { FC } from 'react'

import { Heading } from '../../../components-ui/Headings'

import styles from './cruise-name.module.scss'

interface IProps {
	className?: string
}

export const CruiseName: FC<IProps> = ({ className }) => {

	return (
		<Heading as="h3" className={classNames(className, styles.component)}>
			Жемчужины Персидского залива
		</Heading>
	)
}

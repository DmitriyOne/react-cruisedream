import classNames from 'classnames'
import { FC } from 'react'
import { Heading } from '../../Headings'

import styles from './cruise-name.module.scss'

interface IProps {
	name: string
}

export const CruiseName: FC<IProps> = ({ name }) => {

	return (
		<Heading as="h3" className={classNames(styles.component)}>
			{name}
		</Heading>
	)
}

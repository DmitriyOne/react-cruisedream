import classNames from 'classnames'

import { Heading } from '../../Headings'

import styles from './cruise-name.module.scss'

export const CruiseName = () => {

	return (
		<Heading as="h3" className={classNames(styles.component)}>
			Жемчужины Персидского залива
		</Heading>
	)
}

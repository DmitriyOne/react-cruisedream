import classNames from 'classnames'

import { Container } from '@crdr/ui'

import { OverseasCruises } from './overseas-cruises/overseas-cruises'
import { RussianCruises } from './russian-cruises/russian-cruises'

import styles from './cruises.module.scss'

export const Cruises = () => {

	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
			tag="section"
		>
			<RussianCruises />
			<OverseasCruises />
		</Container>
	)
}

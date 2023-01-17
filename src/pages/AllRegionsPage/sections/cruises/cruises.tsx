import classNames from 'classnames'

import { Container } from '../../../../components-ui'

import { InternationalCruises } from './international-cruises/internationalCruises'
import { NoFlyCruises } from './no-fly-cruises/noFlyCruises'

import styles from './cruises.module.scss'

export const Cruises = () => {

	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
			tag="section"
		>
			<NoFlyCruises />
			<InternationalCruises />
		</Container>
	)
}

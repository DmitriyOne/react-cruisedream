import classNames from 'classnames'
import { Container } from '../../../components-ui'
import { useWindowSize } from '../../../hooks'

import { OptionsFree } from './OptionsFree/OptionsFree'
import { OptionsPaid } from './OptionsPaid/OptionsPaid'

import styles from './ship-options.module.scss'

export const ShipOptions = () => {
	const { isMobile } = useWindowSize()

	const justify = isMobile ? 'start' : 'around'
	const align = isMobile ? 'start' : 'center'
	const direction = isMobile ? 'column' : 'row'
	return (
		<Container
			width="full"
			className={classNames(styles.components)}
		>
			<Container
				align={align}
				justify={justify}
				direction={direction}
			>
				<OptionsFree />
				<OptionsPaid />
			</Container>
		</Container>
	)
}

import { useWindowSize } from '../../../../hooks'

import { Container } from '../../../../components'
import { Description } from './description/description'
import { Slider } from './slider/slider'

import styles from './ship.module.scss'

export const Ship = () => {
	const { isTablet } = useWindowSize()

	const direction = isTablet ? 'columnReverse' : 'row'
	return (
		<Container width="full" className={styles.component}>
			<Container width="containerXl" align="stretch" direction={direction}>
				<Description/>
				<Slider  />
			</Container>
		</Container>
	)
}

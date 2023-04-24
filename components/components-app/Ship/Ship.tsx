import { FC } from 'react'
import classNames from 'classnames'

import { useWindowSize } from '@crdr/hooks'

import { SwiperShip } from '@crdr/components'
import { Container } from '@crdr/ui'

import { ShipContent } from './ShipContent/ShipContent'

import styles from './ship.module.scss'

interface IProps {
	componentClass?: string
	isShowDescText?: boolean
	isShowLinks?: boolean
	shipData?: 'full' | 'short'
}

export const Ship: FC<IProps> = ({ componentClass, ...props }) => {
	const { isTablet } = useWindowSize()

	const direction = isTablet ? 'columnReverse' : 'row'
	const componentClassName = classNames(styles.component, componentClass)
	return (
		<Container id="ship" width="full" className={componentClassName} tag="section">
			<Container width="containerXl" align="stretch" direction={direction}>
				<ShipContent  {...props} />
				<SwiperShip />
			</Container>
		</Container>
	)
}

/* eslint-disable max-len */
import { dataShipGallery } from '../../fakedata'
import { useWindowSize } from '../../hooks'

import { HeaderAnchors, IntroWithGallery } from '../../components/RepeaterBlocks'
import { Header, Overview, Options } from './sections'
import { Ship } from '../../components/Ship'

import styles from './current-ship-page.module.scss'

export const CurrentShipPage = () => {
	const { isMobile } = useWindowSize()

	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataShipGallery} />
			<Ship componentClass={styles.ship} isShowDescText={false} isShowLinks={false} shipData="full" />
			{/* <Options /> */}
		</>
	)
}

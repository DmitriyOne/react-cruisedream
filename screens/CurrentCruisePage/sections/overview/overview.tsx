import classNames from 'classnames'

import { dataCruiseGallery } from '@crdr/fakedata'
import { useWindowSize } from '@crdr/hooks'

import { CruiseLogo, CruiseRoute, SwiperGallery } from '@crdr/components'
import { Container } from '@crdr/ui'

import { OverviewHeader } from './overviewHeader/overviewHeader'
import { RowBottom, RowCenter, RowTop } from './rows'

import styles from './overview.module.scss'

export const Overview = () => {
	const { isMobile } = useWindowSize()

	const isShowOnMobile = isMobile
	return (
		<Container id="overview" width="full" className={styles.component} tag="section">
			<Container width="containerS" direction="column" align="start">

				<OverviewHeader />

				<SwiperGallery images={dataCruiseGallery} isCruisePage />

				{isShowOnMobile &&
					<CruiseLogo className={styles.logo} />
				}

				<RowTop
					componentClass={classNames(
						styles.row, styles.alignTop
					)}
					columnLeftClass={styles.colLeft}
					columnRightClass={styles.colRight}
				/>

				<RowCenter
					componentClass={styles.row}
					columnLeftClass={styles.colLeft}
				/>

				{isShowOnMobile &&
					<CruiseRoute
						classComponent={styles.routeWrapper}
					/>
				}

				<RowBottom
					componentClass={classNames(
						styles.row, styles.pt0, styles.alignBottom
					)}
					columnLeftClass={styles.colLeft}
					columnRightClass={styles.colRight}
				/>
			</Container>
		</Container>
	)
}

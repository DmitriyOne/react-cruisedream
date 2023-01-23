import classNames from 'classnames'

import { useWindowSize } from '../../../../hooks'
import { dataCruiseGallery } from '../../../../fakedata'

import { Container } from '../../../../components-ui'
import { CruiseLogo, CruiseRoute } from '../../../../components/Cruise'

import { RowBottom, RowCenter, RowTop } from './rows'
import { OverviewHeader } from './overviewHeader/overviewHeader'

import styles from './overview.module.scss'
import { MyGallery } from '../../../../components-plugin'

export const Overview = () => {
	const { isMobile } = useWindowSize()

	const isShowOnMobile = isMobile
	return (
		<Container id="overview" width="full" className={styles.component} tag="section">
			<Container width="containerS" direction="column" align="start">

				<OverviewHeader />

				<MyGallery images={dataCruiseGallery} isCruisePage />

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

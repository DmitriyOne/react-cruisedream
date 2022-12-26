import classNames from 'classnames'

import { useWindowSize } from '../../../../hooks'

import { Container } from '../../../../components'
import {
	CruiseGallery,
	CruiseLogo,
	CruiseRoute,
} from '../../../../components/Cruise'

import styles from './overview.module.scss'
import { OverviewHeader } from './overviewHeader/overviewHeader'
import { RowBottom, RowCenter, RowTop } from './rows'

export const Overview = () => {
	const { isMobile } = useWindowSize()

	const isShowOnMobile = isMobile
	return (
		<Container id="overview" width="full" className={styles.component}>
			<Container width="containerS" direction="column" align="start">

				<OverviewHeader />

				<CruiseGallery />

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

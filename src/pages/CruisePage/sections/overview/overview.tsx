import classNames from 'classnames'
import { FC, } from 'react'

import { useWindowSize } from '../../../../hooks'

import { Container } from '../../../../components'
import {
	CruiseGallery,
	CruiseLogo,
	CruiseRoute,
} from '../../../../components/Cruise'

import styles from './overview.module.scss'
import { OverviewHeader } from './overviewHeader/overviewHeader'
import { ICruiseRoute, IIncludedIcon } from '../../../../model/interfaces'
import { RowBottom, RowCenter, RowTop } from './rows'

interface IProps {
	cruiseName: string
	id: string
	label: string
	sale?: number
	days: number
	logo: string
	datepicker: string
	otherDates?: string[]
	shipName: string
	cruiseRoute: ICruiseRoute[]
	icons: IIncludedIcon[]
	isSale: boolean
}

export const Overview: FC<IProps> = ({ ...cruise }) => {
	const { isMobile } = useWindowSize()

	const isShowOnMobile = isMobile
	return (
		<Container width="full" className={styles.component}>
			<Container width="containerS" direction="column" align="start">

				<OverviewHeader
					cruiseName={cruise.cruiseName}
					id={cruise.id}
				/>

				<CruiseGallery
					label={cruise.label}
					sale={cruise.sale}
					days={cruise.days}
				/>

				{isShowOnMobile &&
					<CruiseLogo
						className={styles.logo}
						logo={cruise.logo}
					/>
				}

				<RowTop
					componentClass={classNames(
						styles.row, styles.alignTop
					)}
					columnLeftClass={styles.colLeft}
					columnRightClass={styles.colRight}
					cruiseName={cruise.cruiseName}
					days={cruise.days}
					datepicker={cruise.datepicker}
					otherDates={cruise.otherDates}
				/>

				<RowCenter
					componentClass={styles.row}
					columnLeftClass={styles.colLeft}
					logo={cruise.logo}
					shipName={cruise.shipName}
				/>

				{isShowOnMobile &&
					<CruiseRoute
						classComponent={styles.routeWrapper}
						routes={cruise.cruiseRoute}
					/>
				}

				<RowBottom
					componentClass={classNames(
						styles.row, styles.pt0, styles.alignBottom
					)}
					columnLeftClass={styles.colLeft}
					columnRightClass={styles.colRight}
					icons={cruise.icons}
					isSale={cruise.isSale}
					sale={cruise.sale}
				/>
				
			</Container>
		</Container>
	)
}

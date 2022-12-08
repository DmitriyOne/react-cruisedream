import { useWindowSize } from '../../../../../hooks'

import styles from './card-body.module.scss'
import {
	CruiseAmountDays,
	CruiseLogo,
	CruiseDates,
	CruiseName,
	CruiseIncludedIcon,
	CruiseShipName,
	CruiseRoute
} from '../../../../../components/Cruise'
import { ICruiseRoute, IIncludedIcon } from '../../../../../model/interfaces'
import { FC } from 'react'

interface IProps {
	logo: string
	days: number
	cruiseName: string
	datepicker: string
	shipName: string
	routes: ICruiseRoute[]
	icons: IIncludedIcon[]
}

export const CardBody: FC<IProps> = ({
	logo,
	days,
	cruiseName,
	datepicker,
	shipName,
	routes,
	icons
}) => {
	const { isMobile } = useWindowSize()

	return (
		<div className={styles.component}>

			<div className={styles.header}>
				{isMobile
					?
					<CruiseLogo logo={logo} />
					:
					<CruiseAmountDays days={days} />
				}
				<div className={styles.headerWrapper}>
					<CruiseName name={cruiseName} />
					<CruiseDates datepicker={datepicker} />
				</div>
			</div>

			<div className={styles.body}>
				<CruiseShipName ship={shipName} />
				<CruiseRoute routes={routes} />
			</div>

			{!isMobile &&
				<CruiseIncludedIcon icons={icons} />
			}
		</div>
	)
}

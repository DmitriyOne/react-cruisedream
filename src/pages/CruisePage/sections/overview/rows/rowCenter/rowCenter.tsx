import classNames from 'classnames'
import { FC } from 'react'

import { CruiseLogo } from '../../../../../../components/Cruise'
import { ShipName } from '../../../../../../components/Ship'
import { useWindowSize } from '../../../../../../hooks'

import styles from './row-center.module.scss'

interface IProps {
	componentClass?: string
	columnLeftClass?: string
	logo: string
	shipName: string
}

export const RowCenter: FC<IProps> = ({
	componentClass,
	columnLeftClass,
	logo,
	shipName
}) => {
	const { isMobile } = useWindowSize()

	const isShowOnDesktop = !isMobile
	const isShowIcon = isMobile
	return (
		<div className={componentClass}>
			<div className={classNames(columnLeftClass, styles.laptopFull)}>
				{isShowOnDesktop &&
					<CruiseLogo
						className={styles.logo}
						logo={logo}
					/>
				}
				<ShipName
					classComponent={styles.shipWrapper}
					classNameText={styles.shipName}
					name={shipName}
					isIcon={isShowIcon}
				/>
			</div>
		</div>

	)
}
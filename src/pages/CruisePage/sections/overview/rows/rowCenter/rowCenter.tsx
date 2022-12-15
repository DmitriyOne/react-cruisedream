import classNames from 'classnames'
import { FC } from 'react'

import { CruiseLogo, CruiseShipName } from '../../../../../../components/Cruise'
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
				<CruiseShipName
					classComponent={styles.shipWrapper}
					classNameText={styles.shipName}
					ship={shipName}
					isIcon={isShowIcon}
				/>
			</div>
		</div>

	)
}

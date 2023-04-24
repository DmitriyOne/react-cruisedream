import { FC } from 'react'

import { ICabinsShip } from '@crdr/interfaces'

import { SwiperCabins } from '@crdr/components'

import { DescRight } from './DescRight/DescRight'

import styles from './cabins-desc.module.scss'

interface IProps {
	cabins: ICabinsShip[]
}

export const CabinsDesc: FC<IProps> = ({ cabins }) => {

	return (
		<>
			{cabins.map(cabin =>
				<div key={cabin.id} className={styles.component}>
					<div className={styles.container}>
						<div className={styles.left}>
							<SwiperCabins images={cabin.images} />
						</div>
						<div className={styles.right}>
							<DescRight cabin={cabin} />
						</div>
					</div>
				</div>
			)}
		</>
	)
}

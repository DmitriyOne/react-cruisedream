import { FC } from 'react'

import { Heading } from '../../../../components'

import { ICabins } from '../../../../model/interfaces'

import { DescLeft } from './DescLeft/DescLeft'
import { DescRight } from './DescRight/DescRight'

import styles from './cabins-desc.module.scss'

interface IProps {
	cabins: ICabins[]
}

export const CabinsDesc: FC<IProps> = ({ cabins }) => {

	return (
		<>
			{cabins.map(cabin =>
				<div key={cabin.id} className={styles.component}>
					<Heading as="h5" className={styles.title}>
						{cabin.title}
					</Heading>
					<div className={styles.container}>
						<div className={styles.left}>
							<DescLeft images={cabin.images} />
						</div>
						<div className={styles.right}>
							<DescRight cabinsDesc={cabin.desc} />
						</div>
					</div>
				</div>
			)}
		</>
	)
}

import { Heading } from '../../../../components'

import { DescLeft } from './DescLeft/DescLeft'
import { DescRight } from './DescRight/DescRight'

import styles from './cabins-desc.module.scss'

export const CabinsDesc = () => {

	return (
		<div className={styles.component}>
			<Heading as="h5" className={styles.title}>
				КАЮТА С БАЛКОНОМ С ОГРАНИЧЕННЫМ ВИДОМ
			</Heading>
			<div className={styles.container}>
				<div className={styles.left}>
					<DescLeft />
				</div>
				<div className={styles.right}>
					<DescRight />
				</div>
			</div>
		</div>
	)
}

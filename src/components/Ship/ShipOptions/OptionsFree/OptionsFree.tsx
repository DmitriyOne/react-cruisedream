import { Heading } from '../../../../components-ui'
import { dataOptionsFree } from '../data/ship-options'

import styles from '../ship-options.module.scss'

export const OptionsFree = () => {
	return (
		<div className={styles.component}>
			<Heading as="h4" className={styles.title}>
				Бесплатные рестораны
			</Heading>
			<ul>
				{dataOptionsFree.map((item, idx) =>
					<li key={idx} className={styles.item}>
						{item.title}
					</li>
				)}
			</ul>
		</div>
	)
}

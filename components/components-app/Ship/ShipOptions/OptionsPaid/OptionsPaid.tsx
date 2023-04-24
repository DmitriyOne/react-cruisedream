import { Heading } from '@crdr/ui'

import { dataOptionsPaid } from '../data/ship-options'

import styles from '../ship-options.module.scss'

export const OptionsPaid = () => {
	return (
		<div className={styles.component}>
			<Heading as="h4" className={styles.title}>
				Платные рестораны
			</Heading>
			<ul>
				{dataOptionsPaid.map((item, idx) =>
					<li key={idx} className={styles.item}>
						{item.title}
					</li>
				)}
			</ul>
		</div>
	)
}

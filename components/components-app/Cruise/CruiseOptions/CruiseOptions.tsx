import classNames from 'classnames'

import { Heading } from '@crdr/ui'

import { DataExtraTitles, DataIncludedTitles } from './data/cruise-options'
import { ExtraTitle } from './ExtraTitle/ExtraTitle'
import { IncludedTitle } from './IncludedTitle/IncludedTitle'

import styles from './cruise-options.module.scss'

export const CruiseOptions = () => {

	return (
		<>
			<div className={styles.wrapper}>
				<Heading as="h3" className={styles.title}>
					ВКЛЮЧЕНО В ВАШ КРУИЗ
				</Heading>
				<ul className={styles.ul}>
					{DataIncludedTitles.map((item, idx) =>
						<IncludedTitle key={idx} className={styles.item} title={item.title} />
					)}
				</ul>
			</div>
			<div className={styles.wrapper}>
				<Heading as="h3" className={classNames(styles.title, styles.titleSmall)}>
					ОПЛАЧИВАЕТСЯ ДОПОЛНИТЕЛЬНО
				</Heading>
				<ul className={styles.ul}>
					{DataExtraTitles.map((item, idx) =>
						<ExtraTitle key={idx} className={styles.item} title={item.title} />
					)}
				</ul>
			</div>
		</>
	)
}

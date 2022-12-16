import { FC } from 'react'
import classNames from 'classnames'

import { IExtraTitle, IIncludedTitle } from '../../../model/interfaces'
import { Heading } from '../../../components'

import { ExtraTitle } from './ExtraTitle/ExtraTitle'
import { IncludedTitle } from './IncludedTitle/IncludedTitle'

import styles from './ship-options.module.scss'

interface IProps {
	includedTitles: IIncludedTitle[]
	extraTitles: IExtraTitle[]
}

export const ShipOptions: FC<IProps> = ({ includedTitles, extraTitles }) => {

	return (
		<>
			<div className={styles.wrapper}>
				<Heading as="h3" className={styles.title}>
					ВКЛЮЧЕНО В ВАШ КРУИЗ
				</Heading>
				<ul className={styles.ul}>
					{includedTitles.map((item, idx) =>
						<IncludedTitle key={idx} className={styles.item} title={item.title} />
					)}
				</ul>
			</div>
			<div className={styles.wrapper}>
				<Heading as="h3" className={classNames(styles.title, styles.titleSmall)}>
					ОПЛАЧИВАЕТСЯ ДОПОЛНИТЕЛЬНО
				</Heading>
				<ul className={styles.ul}>
					{extraTitles.map((item, idx) =>
						<ExtraTitle key={idx} className={styles.item} title={item.title} />
					)}
				</ul>
			</div>
		</>
	)
}

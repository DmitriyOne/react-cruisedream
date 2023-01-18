/* eslint-disable max-len */
import { FC } from 'react'

import { Button, Heading } from '../../../../../components-ui'
import { ICabinsShip } from '../../../../../model/interfaces'

import styles from './desc-right.module.scss'

export const DescRight: FC<ICabinsShip> = ({ ...cabins }) => {

	return (
		<>
			<Heading as="h4" className={styles.title}>
				{cabins.title}
			</Heading>
			<p className={styles.desc}>
				{cabins.desc}
			</p>
			<Button className={styles.button}>
				Описание
			</Button>
		</>
	)
}

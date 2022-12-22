import { FC } from 'react'
import { Container } from '../../../../components'
import { CruiseToBook } from '../../../../components/Cruise'

import styles from './to-book.module.scss'

interface IProps {
	shipName: string
	deadline: string
}

export const ToBook: FC<IProps> = ({ shipName, deadline }) => {

	return (
		<Container width="full" className={styles.component}>
			<Container width="containerS" justify="between" className={styles.container}>
				<CruiseToBook shipName={shipName} deadline={deadline} />

			</Container>
		</Container>
	)
}

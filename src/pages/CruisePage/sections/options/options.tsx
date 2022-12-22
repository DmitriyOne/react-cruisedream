import { FC } from 'react'

import { Container } from '../../../../components'
import { ShipOptions } from '../../../../components/Ship'
import { IIncludedTitle, IExtraTitle } from '../../../../model/interfaces'

import styles from './options.module.scss'

interface IProps {
	includedTitles: IIncludedTitle[]
	extraTitles: IExtraTitle[]
}

export const Options: FC<IProps> = ({ includedTitles, extraTitles }) => {

	return (
		<Container width="full" className={styles.component}>
			<Container width="containerS" direction="column" align="start">
				<ShipOptions includedTitles={includedTitles} extraTitles={extraTitles} />
			</Container>
		</Container>
	)
}

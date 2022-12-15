import { FC } from 'react'

import styles from './ship.module.scss'

interface IProps {
	shipName: string
}

export const Ship: FC<IProps> = ({ ...cruise }) => {

	return (
		<div>ship</div>
	)
}

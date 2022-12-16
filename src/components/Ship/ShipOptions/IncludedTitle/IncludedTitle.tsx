import { FC } from 'react'

import { IIncludedTitle } from '../../../../model/interfaces'

import styles from './included-title.module.scss'

interface IProps extends IIncludedTitle {
	className?: string
}

export const IncludedTitle: FC<IProps> = ({ title, className }) => {

	return (
		<li className={className}>
			{title}
		</li>
	)
}

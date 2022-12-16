import { FC } from 'react'

import { IExtraTitle } from '../../../../model/interfaces'

import styles from './extra-title.module.scss'

interface IProps extends IExtraTitle {
	className?: string
}

export const ExtraTitle: FC<IProps> = ({ title, className }) => {

	return (
		<li className={className}>
			{title}
		</li>
	)
}

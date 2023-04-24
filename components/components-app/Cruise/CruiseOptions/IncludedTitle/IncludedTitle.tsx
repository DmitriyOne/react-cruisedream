import { FC } from 'react'

import { IIncludedTitle } from '@crdr/interfaces'

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

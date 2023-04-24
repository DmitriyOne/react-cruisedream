import { FC } from 'react'

import { IExtraTitle } from '@crdr/interfaces'

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

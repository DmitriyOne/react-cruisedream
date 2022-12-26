import { FC } from 'react'
import { B } from '../../B'

interface IProps {
	tooltipDates?: string[]
	classText?: string
}

export const Dates: FC<IProps> = ({ tooltipDates, classText }) => {
	return (
		<>
			{tooltipDates?.map((date, idx) =>
				<B
					key={idx}
					fontWeight={500}
					className={classText}
				>
					{date}
				</B>
			)}
		</>
	)
}

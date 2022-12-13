import { FC } from 'react'
import { B } from '../../B'

interface IProps {
	otherDates?: string[]
	classText?: string
}

export const Dates: FC<IProps> = ({ otherDates, classText }) => {
	return (
		<>
			{otherDates?.map((date, idx) =>
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

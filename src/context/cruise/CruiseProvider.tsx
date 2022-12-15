import { FC, ReactNode, useEffect, useState } from 'react'

import { DataAllCruise } from '../../fakedata'
import { ICruise } from '../../model/interfaces'

import { CruiseContext } from './CruiseContext'

interface IProps {
	children: ReactNode
}

export const CruiseProvider: FC<IProps> = ({ children }) => {
	const [allCruises, setAllCruises] = useState<ICruise[]>([])

	useEffect(() => {
		setAllCruises(DataAllCruise)
	}, [])

	const value = {
		allCruises
	}

	return (
		<CruiseContext.Provider value={value}>
			{children}
		</CruiseContext.Provider>
	)
}

import { createContext } from 'react'

import { ICruise } from '../../model/interfaces'

interface IProps {
	allCruises: ICruise[]
}

const defaultValue: IProps = {
	allCruises: [],
}

export const CruiseContext = createContext<IProps>(defaultValue)

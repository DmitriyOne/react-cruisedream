import { ITabs } from '@crdr/interfaces'

import { CabinsInner } from '../CabinsInner/CabinsInner'
import { CabinsSuite } from '../CabinsSuite/CabinsSuite'
import { CabinsWithBalcony } from '../CabinsWithBalcony/CabinsWithBalcony'
import { CabinsWithWindow } from '../CabinsWithWindow/CabinsWithWindow'

export const tabs: ITabs[] = [
	{
		id: 1,
		title: 'Внутренняя',
		subtitle: 'от 1 225 $',
		children: <CabinsInner />,
	},
	{
		id: 2,
		title: 'C окном',
		subtitle: 'от 1 625 $',
		children: <CabinsWithWindow />,
	},
	{
		id: 3,
		title: 'C балконом',
		subtitle: 'от 1 725 $',
		children: <CabinsWithBalcony />,
	},
	{
		id: 4,
		title: 'Сьют',
		subtitle: 'от 1 955 $',
		children: <CabinsSuite />,
	},
]

import { ITabs } from '../../../../model/interfaces'

import { CabinsInner } from '../CabinsInner/CabinsInner'
import { CabinsSuite } from '../CabinsSuite/CabinsSuite'
import { CabinsWithBalcony } from '../CabinsWithBalcony/CabinsWithBalcony'
import { CabinsWithWindow } from '../CabinsWithWindow/CabinsWithWindow'

export const tabs: ITabs[] = [
	{
		id: 1,
		title: 'Внутренняя',
		subtitle: 'каюта',
		children: <CabinsInner />
	},
	{
		id: 2,
		title: 'Каюта с',
		subtitle: 'окном',
		children: <CabinsWithWindow />
	},
	{
		id: 3,
		title: 'Каюта с',
		subtitle: 'балконом',
		children: <CabinsWithBalcony />
	},
	{
		id: 4,
		title: 'Каюта',
		subtitle: 'сьют',
		children: <CabinsSuite />
	}
]

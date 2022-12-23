import { ITabs } from '../../../../model/interfaces'

import { CabinsDesc } from '../CabinsDesc/CabinsDesc'

export const tabs: ITabs[] = [
	{
		id: 1,
		title: 'Внутренняя',
		subtitle: 'от 1 225 $',
		children: <CabinsDesc/>
	},
	{
		id: 2,
		title: 'C окном',
		subtitle: 'от 1 625 $',
		children: <p>Каюта с окном</p>
	},
	{
		id: 3,
		title: 'C балконом',
		subtitle: 'от 1 725 $',
		children: <p>Каюта с балконом</p>
	},
	{
		id: 4,
		title: 'Сьют',
		subtitle: 'от 1 955 $',
		children: <p>Сьют каюта</p>
	}
]

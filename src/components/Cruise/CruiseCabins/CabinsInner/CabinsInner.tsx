import { CabinsDesc } from '../CabinsDesc/CabinsDesc'

import { cabinsInner } from '../data/cabins'

export const CabinsInner = () => {
	return (
		<>
			<CabinsDesc cabins={cabinsInner} />
		</>
	)
}

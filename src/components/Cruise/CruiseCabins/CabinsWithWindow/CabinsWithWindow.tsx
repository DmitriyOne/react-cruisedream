import { CabinsDesc } from '../CabinsDesc/CabinsDesc'

import { cabinsWindow } from '../data/cabins'

export const CabinsWithWindow = () => {
	return (
		<>
			<CabinsDesc cabins={cabinsWindow} />
		</>
	)
}

import { CabinsDesc } from '../CabinsDesc/CabinsDesc'
import { cabinsSuite } from '../data/cabins'

export const CabinsSuite = () => {
	return (
		<>
			<CabinsDesc cabins={cabinsSuite} />
		</>
	)
}

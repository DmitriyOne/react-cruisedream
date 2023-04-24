import { CabinsDesc } from '../CabinsDesc/CabinsDesc'
import { cabinsBalcony } from '../data/cabins'

export const CabinsWithBalcony = () => {
	return (
		<>
			<CabinsDesc cabins={cabinsBalcony} />
		</>
	)
}

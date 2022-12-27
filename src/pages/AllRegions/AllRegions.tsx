import { Heading } from '../../components'
import { Intro, Regions } from './sections'

export const AllRegionsPage = () => {
	return (
		<>
			<Heading align="center" className="title">
				ВСЕ РЕГИОНЫ
			</Heading>
			<Intro />
			<Regions />
		</>
	)
}

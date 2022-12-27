import { Banner } from '../../components'
import { Cruises, Intro, PopularCruises, PopularPost, Regions } from './sections'

export const AllRegionsPage = () => {
	return (
		<>
			<Intro />
			<Regions />
			<Cruises />
			<Banner />
			<PopularCruises />
			<PopularPost />
		</>
	)
}

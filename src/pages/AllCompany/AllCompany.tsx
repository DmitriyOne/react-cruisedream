import { Banner } from '../../components'
import { PopularCruises, PopularPost } from '../AllRegions/sections'
import { About, Advantages } from '../HomePage/sections'
import { AllCruiseCompany, Intro, NewShips } from './sections'

export const AllCompanyPage = () => {
	return (
		<>
			<Intro />
			<AllCruiseCompany />
			<NewShips />
			<Banner />
			<PopularCruises />
			<PopularPost />
			<About />
			<Advantages />
		</>
	)
}

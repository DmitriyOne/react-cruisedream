import { About, Advantages, Banner, PopularBlogPosts, PopularCruises } from '../../components/RepeaterBlocks'
import { AllCruiseCompany, Intro, NewShips } from './sections'

export const AllCompanyPage = () => {
	return (
		<>
			<Intro />
			<AllCruiseCompany />
			<NewShips />
			<Banner />
			<PopularCruises />
			<PopularBlogPosts />
			<About />
			<Advantages />
		</>
	)
}

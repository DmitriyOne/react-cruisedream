import { About, Advantages, Banner, PopularBlogPosts, PopularCruises } from '../../components/RepeaterBlocks'
import { dataCompanyPopularBlogPosts } from '../../fakedata'
import { AllCruiseCompany, Intro, NewShips } from './sections'

export const AllCompanyPage = () => {
	return (
		<>
			<Intro />
			<AllCruiseCompany />
			<NewShips />
			<Banner />
			<PopularCruises componentClass="pt-section pb-s-section" />
			<PopularBlogPosts cards={dataCompanyPopularBlogPosts} />
			<About />
			<Advantages />
		</>
	)
}

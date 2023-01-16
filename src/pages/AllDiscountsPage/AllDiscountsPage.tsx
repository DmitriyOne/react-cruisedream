import { Banner, IntroHome, PopularBlogPosts, PopularCruises, About, Advantages } from '../../components/RepeaterBlocks'
import { dataPortPopularBlogPosts } from '../../fakedata'
import { AllSale, NewSales } from './sections'

export const AllDiscountsPage = () => {
	return (
		<>
			<IntroHome />
			<AllSale />
			<NewSales />
			<Banner />
			<PopularCruises componentClass="pt-section pb-section" isBottomLink  />
			<PopularBlogPosts cards={dataPortPopularBlogPosts} />
			<About />
			<Advantages />
		</>
	)
}

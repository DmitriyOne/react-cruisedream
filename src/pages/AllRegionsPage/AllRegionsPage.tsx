/* eslint-disable max-len */
import { About, Advantages, Banner, PopularBlogPosts, RegionsCards, PopularCruises } from '../../components/RepeaterBlocks'
import { Cruises, Intro } from './sections'

export const AllRegionsPage = () => {
	return (
		<>
			<Intro />
			<RegionsCards position="row" />
			<Cruises />
			<Banner />
			<PopularCruises componentClass="pt-section pb-s-section" />
			<PopularBlogPosts />
			<About />
			<Advantages />
		</>
	)
}

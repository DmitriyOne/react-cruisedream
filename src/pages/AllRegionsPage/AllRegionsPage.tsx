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
			<PopularCruises />
			<PopularBlogPosts />
			<About />
			<Advantages />
		</>
	)
}

/* eslint-disable max-len */
import { About, Advantages, BannerDefault, BannerWithSlider, PopularBlogPosts, PopularCruisePosts } from '@crdr/components'

import { AllSale, NewSales } from './sections'

export const AllDiscountsPage = () => {

	return (
		<>
			<BannerWithSlider />
			<AllSale />
			<NewSales />
			<BannerDefault />
			<PopularCruisePosts />
			<PopularBlogPosts />
			<About />
			<Advantages />
		</>
	)
}

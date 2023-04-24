/* eslint-disable max-len */
import { About, Advantages, BannerDefault, PopularBlogPosts, PopularCruisePosts, SwiperRegionCards } from '@crdr/components'

import { Cruises, Intro } from './sections'

export const AllRegionsPage = () => {
	return (
		<>
			<Intro />
			<SwiperRegionCards isMobilePaddingNull position="row" cardPositionContent="center" />
			<Cruises />
			<BannerDefault />
			<PopularCruisePosts />
			<PopularBlogPosts />
			<About />
			<Advantages />
		</>
	)
}

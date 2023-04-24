import { About, Advantages, BannerDefault, PopularBlogPosts, PopularCruisePosts } from '@crdr/components'

import { AllCruiseCompany, Intro, NewShips } from './sections'

export const AllCompanyPage = () => {
	return (
		<>
			<Intro />
			<AllCruiseCompany />
			<NewShips />
			<BannerDefault />
			<PopularCruisePosts />
			<PopularBlogPosts />
			<About />
			<Advantages />
		</>
	)
}

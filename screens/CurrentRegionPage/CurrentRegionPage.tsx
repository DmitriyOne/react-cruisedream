/* eslint-disable max-len */
import { dataArticlePhoto1, dataArticlePhoto2, dataArticleVideo, dataRegionDescCurrentPage, dataRegionGalleryIntro, dataRegionsHelpfulAdvice } from '@crdr/fakedata'

import { About, Advantages, Article, DescCurrentPage, DestinationsMap, HeaderAnchors, HelpfulAdvice, IntroWithGallery, PopularBlogPosts, PopularCountryPosts, PopularCruisePosts, PopularPortPosts } from '@crdr/components'

export const CurrentRegionPage = () => {

	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataRegionGalleryIntro} />
			<PopularCruisePosts />
			<DescCurrentPage {...dataRegionDescCurrentPage} />
			<PopularCountryPosts />
			<DestinationsMap />
			<PopularPortPosts />
			<Article {...dataArticlePhoto1} />
			<Article {...dataArticlePhoto2} />
			<Article {...dataArticleVideo} />
			<HelpfulAdvice {...dataRegionsHelpfulAdvice} />
			<PopularCruisePosts />
			<PopularBlogPosts />
			<About />
			<Advantages />
		</>
	)
}

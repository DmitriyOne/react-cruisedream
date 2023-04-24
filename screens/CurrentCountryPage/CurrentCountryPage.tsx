/* eslint-disable max-len */
import { dataArticlePhoto1, dataArticlePhoto2, dataArticleVideo, dataCountryDescCurrentPage, dataCountryGalleryIntro, dataCountryHelpfulAdvice } from '@crdr/fakedata'

import { PopularBlogPosts, PopularCruisePosts, PopularPortPosts } from '@crdr/components'
import { About, Advantages, Article, DescCurrentPage, HeaderAnchors, HelpfulAdvice, IntroWithGallery } from '@crdr/components/RepeaterBlocks'

export const CurrentCountryPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataCountryGalleryIntro} />
			<PopularCruisePosts />
			<DescCurrentPage {...dataCountryDescCurrentPage} />
			<PopularPortPosts />
			<Article {...dataArticlePhoto1} />
			<Article {...dataArticlePhoto2} />
			<Article {...dataArticleVideo} />
			<HelpfulAdvice {...dataCountryHelpfulAdvice} />
			<PopularCruisePosts />
			<PopularBlogPosts />
			<About />
			<Advantages />
		</>
	)
}

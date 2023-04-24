/* eslint-disable max-len */
import { dataArticlePhoto1, dataArticlePhoto2, dataArticleVideo, dataCompanyDescCurrentPage, dataCompanyGalleryIntro } from '@crdr/fakedata'

import { PopularBlogPosts, PopularCruisePosts } from '@crdr/components'
import { About, Advantages, Article, DescCurrentPage, HeaderAnchors, IntroWithGallery, RegionsAccordion } from '@crdr/components/RepeaterBlocks'

import { Fleet } from './sections'

export const CurrentCompanyPage = () => {

	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataCompanyGalleryIntro} />
			<PopularCruisePosts />
			<Article {...dataArticleVideo} />
			<Fleet />
			<DescCurrentPage componentClass="pb-section" {...dataCompanyDescCurrentPage} />
			<RegionsAccordion />
			<Article {...dataArticlePhoto1} />
			<Article {...dataArticlePhoto2} />
			<PopularCruisePosts />
			<PopularBlogPosts />
			<About />
			<Advantages />
		</>
	)
}

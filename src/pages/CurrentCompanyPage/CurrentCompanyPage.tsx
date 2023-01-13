/* eslint-disable max-len */
import {
	HeaderAnchors,
	IntroWithGallery,
	PopularCruises,
	Desc,
	About,
	Advantages,
	RegionsAccordion,
	PopularBlogPosts,
} from '../../components/RepeaterBlocks'
import { Article } from '../../components/RepeaterBlocks/Article/Article'

import { dataCompanyGallery, dataCompanyDesc, dataCompanyArticleVideo, dataCompanyArticlePhoto1, dataCompanyArticlePhoto2, dataCompanyPopularBlogPosts } from '../../fakedata'
import { Fleet } from './sections'

export const CurrentCompanyPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataCompanyGallery} />
			<PopularCruises componentClass="pt-section" isBottomLink />
			<Article {...dataCompanyArticleVideo} />
			<Fleet />
			<Desc componentClass="pb-section" {...dataCompanyDesc} />
			<RegionsAccordion />
			<Article {...dataCompanyArticlePhoto1} />
			<Article {...dataCompanyArticlePhoto2} />
			<PopularCruises componentClass="pt-section pb-section" isBottomLink />
			<PopularBlogPosts cards={dataCompanyPopularBlogPosts} />
			<About />
			<Advantages />

		</>
	)
}

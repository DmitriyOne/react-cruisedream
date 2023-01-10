/* eslint-disable max-len */
import {
	HeaderAnchors,
	IntroWithGallery,
	PopularCruises,
	Desc,
	Article,
	HelpfulBlogPosts,
	About,
	Advantages,
	RegionsAccordion,
} from '../../components/RepeaterBlocks'

import { dataCompanyGallery, dataCompanyHelpfulBlogPosts, dataCompanyDesc, dataCompanyArticleVideo, dataCompanyArticlePhoto1, dataCompanyArticlePhoto2 } from '../../fakedata'
import { Fleet } from './sections'

export const CurrentCompanyPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataCompanyGallery} />
			<PopularCruises />
			<Article {...dataCompanyArticleVideo} />
			<Fleet />
			<Desc {...dataCompanyDesc} />
			<RegionsAccordion />
			<Article {...dataCompanyArticlePhoto1} />
			<Article {...dataCompanyArticlePhoto2} />
			<PopularCruises />
			<HelpfulBlogPosts cards={dataCompanyHelpfulBlogPosts} />
			<About />
			<Advantages />

		</>
	)
}

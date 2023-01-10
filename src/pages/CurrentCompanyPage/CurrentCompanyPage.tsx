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

import { dataCompanyGallery, dataCompanyHelpfulBlogPosts, dataCompanyDesc, dataCompanyArticleVideo } from '../../fakedata'
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
			<PopularCruises />
			<HelpfulBlogPosts cards={dataCompanyHelpfulBlogPosts} />
			<About />
			<Advantages />

		</>
	)
}

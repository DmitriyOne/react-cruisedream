/* eslint-disable max-len */
import { HeaderAnchors, MapsImages, PopularCountries, PopularPorts, Article, PopularCruises, About, Advantages, IntroWithGallery, Desc, HelpfulAdvice, HelpfulBlogPosts } from '../../components/RepeaterBlocks'

import { dataRegionArticlePhoto1, dataRegionArticlePhoto2, dataRegionArticleVideo, dataRegionDesc, dataRegionGallery, dataRegionHelpfulBlogPosts, dataRegionPopularPort, dataRegionsHelpfulAdvice } from '../../fakedata'

export const CurrentRegionPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataRegionGallery} />
			<PopularCruises />
			<Desc {...dataRegionDesc} />
			<PopularCountries />
			<MapsImages />
			<PopularPorts {...dataRegionPopularPort} />
			<Article {...dataRegionArticlePhoto1} />
			<Article {...dataRegionArticlePhoto2} />
			<Article {...dataRegionArticleVideo} />
			<HelpfulAdvice {...dataRegionsHelpfulAdvice} />
			<PopularCruises />
			<HelpfulBlogPosts cards={dataRegionHelpfulBlogPosts} />
			<About />
			<Advantages />
		</>
	)
}

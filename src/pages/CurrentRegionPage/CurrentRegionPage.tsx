/* eslint-disable max-len */
import { HeaderAnchors, MapsImages, PopularCountries, PopularPorts, PopularCruises, About, Advantages, IntroWithGallery, Desc, HelpfulAdvice, HelpfulBlogPosts, Article } from '../../components/RepeaterBlocks'
import {
	dataRegionGallery,
	dataRegionDesc,
	dataRegionPopularPort,
	dataRegionArticlePhoto1,
	dataRegionArticlePhoto2,
	dataRegionArticleVideo,
	dataRegionsHelpfulAdvice,
	dataRegionHelpfulBlogPosts,
} from '../../fakedata'

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
			{/* <Article {...dataRegionArticlePhoto1} />
			<Article {...dataRegionArticlePhoto2} />
			<Article {...dataRegionArticleVideo} /> */}
			<HelpfulAdvice {...dataRegionsHelpfulAdvice} />
			<PopularCruises />
			<HelpfulBlogPosts cards={dataRegionHelpfulBlogPosts} />
			<About />
			<Advantages />
		</>
	)
}

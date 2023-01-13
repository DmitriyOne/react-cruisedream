/* eslint-disable max-len */
import { HeaderAnchors, MapsImages, PopularCountries, PopularPorts, PopularCruises, About, Advantages, IntroWithGallery, Desc, HelpfulAdvice, PopularBlogPosts } from '../../components/RepeaterBlocks'
import { Article } from '../../components/RepeaterBlocks/Article/Article'
import {
	dataRegionGallery,
	dataRegionDesc,
	dataRegionPopularPort,
	dataRegionArticlePhoto1,
	dataRegionArticlePhoto2,
	dataRegionArticleVideo,
	dataRegionsHelpfulAdvice,
	dataRegionPopularBlogPosts,
} from '../../fakedata'

export const CurrentRegionPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataRegionGallery} />
			<PopularCruises componentClass="pt-section pb-section" isBottomLink />
			<Desc {...dataRegionDesc} />
			<PopularCountries />
			<MapsImages />
			<PopularPorts {...dataRegionPopularPort} />
			<Article {...dataRegionArticlePhoto1} />
			<Article {...dataRegionArticlePhoto2} />
			<Article {...dataRegionArticleVideo} />
			<HelpfulAdvice {...dataRegionsHelpfulAdvice} />
			<PopularCruises componentClass="pt-section pb-section" isBottomLink />
			<PopularBlogPosts cards={dataRegionPopularBlogPosts} />
			<About />
			<Advantages />
		</>
	)
}

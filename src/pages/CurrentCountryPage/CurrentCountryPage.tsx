/* eslint-disable max-len */
import { About, Advantages, Desc, HeaderAnchors, HelpfulAdvice, IntroWithGallery, PopularBlogPosts, PopularCruises, PopularPorts } from '../../components/RepeaterBlocks'
import { Article } from '../../components/RepeaterBlocks/Article/Article'
import { dataCountryArticlePhoto1, dataCountryArticlePhoto2, dataCountryArticleVideo, dataCountryGallery, dataCountryDesc, dataCountryHelpfulAdvice, dataCountryPopularPort, dataCountryPopularBlogPosts } from '../../fakedata'

export const CurrentCountryPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataCountryGallery} />
			<PopularCruises componentClass="pt-section pb-s-section" />
			<Desc {...dataCountryDesc} />
			<PopularPorts {...dataCountryPopularPort} />
			<Article {...dataCountryArticlePhoto1} />
			<Article {...dataCountryArticlePhoto2} />
			<Article {...dataCountryArticleVideo} />
			<HelpfulAdvice {...dataCountryHelpfulAdvice} />
			<PopularCruises componentClass="pt-section pb-section" isBottomLink />
			<PopularBlogPosts cards={dataCountryPopularBlogPosts} />
			<About />
			<Advantages />
		</>
	)
}

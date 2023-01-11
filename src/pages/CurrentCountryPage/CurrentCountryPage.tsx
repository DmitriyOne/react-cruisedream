/* eslint-disable max-len */
import { About, Advantages, Article, Desc, HeaderAnchors, HelpfulAdvice, HelpfulBlogPosts, IntroWithGallery, PopularCruises, PopularPorts } from '../../components/RepeaterBlocks'
import { dataCountryArticlePhoto1, dataCountryArticlePhoto2, dataCountryArticleVideo, dataCountryGallery, dataCountryDesc, dataCountryHelpfulAdvice, dataCountryPopularPort, dataCountryHelpfulBlogPosts } from '../../fakedata'

export const CurrentCountryPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataCountryGallery} />
			<PopularCruises />
			<Desc {...dataCountryDesc} />
			<PopularPorts {...dataCountryPopularPort} />
			{/* <Article {...dataCountryArticlePhoto1} />
			<Article {...dataCountryArticlePhoto2} />
			<Article {...dataCountryArticleVideo} /> */}
			<HelpfulAdvice {...dataCountryHelpfulAdvice} />
			<PopularCruises />
			<HelpfulBlogPosts cards={dataCountryHelpfulBlogPosts} />
			<About />
			<Advantages />
		</>
	)
}

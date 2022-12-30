/* eslint-disable max-len */
import { About, Advantages, Articles, Desc, HeaderAnchors, HelpfulAdvice, HelpfulBlogPosts, IntroWithGallery, PopularCruises, PopularPorts } from '../../components/RepeaterBlocks'
import { dataCountryArticles, dataCountryGallery, dataCountryDesc, dataCountryHelpfulAdvice, dataCountryPopularPort, dataCountryHelpfulBlogPosts } from '../../fakedata'

export const CurrentCountryPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataCountryGallery} />
			<PopularCruises />
			<Desc {...dataCountryDesc} />
			<PopularPorts {...dataCountryPopularPort} />
			<Articles articles={dataCountryArticles} />
			<HelpfulAdvice {...dataCountryHelpfulAdvice} />
			<PopularCruises />
			<HelpfulBlogPosts cards={dataCountryHelpfulBlogPosts} />
			<About />
			<Advantages />
		</>
	)
}

/* eslint-disable max-len */
import { About, Advantages, Articles, Desc, HeaderAnchors, HelpfulAdvice, HelpfulBlogPosts, IntroWithGallery, PopularCountries, PopularCruises } from '../../components/RepeaterBlocks'
import { dataCountryArticles, dataCountryGallery, dataCountryDesc, dataCountryHelpfulAdvice } from '../../fakedata'

export const CurrentCountryPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataCountryGallery} />
			<PopularCruises />
			<Desc {...dataCountryDesc} />
			<PopularCountries />
			<Articles articles={dataCountryArticles} />
			<HelpfulAdvice {...dataCountryHelpfulAdvice} />
			<PopularCruises />
			<HelpfulBlogPosts />
			<About />
			<Advantages />
		</>
	)
}

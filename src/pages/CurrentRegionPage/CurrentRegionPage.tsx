/* eslint-disable max-len */
import { HeaderAnchors, MapsImages, PopularCountries, PopularPorts, Articles, PopularCruises, About, Advantages, IntroWithGallery, Desc, HelpfulAdvice, HelpfulBlogPosts } from '../../components/RepeaterBlocks'

import { dataRegionArticles } from '../../fakedata'

export const CurrentRegionPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery />
			<PopularCruises />
			<Desc />
			<PopularCountries />
			<MapsImages />
			<PopularPorts />
			<Articles articles={dataRegionArticles} />
			<HelpfulAdvice />
			<PopularCruises />
			<HelpfulBlogPosts />
			<About />
			<Advantages />
		</>
	)
}

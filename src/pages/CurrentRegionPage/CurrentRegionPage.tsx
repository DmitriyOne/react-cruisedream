/* eslint-disable max-len */
import { HeaderAnchors, MapsImages, PopularCountries, PopularPorts, Articles, PopularCruises, About, Advantages, IntroWithGallery, Desc, HelpfulAdvice, HelpfulBlogPosts } from '../../components/RepeaterBlocks'

import { dataRegionArticles, dataRegionDesc, dataRegionGallery, dataRegionHelpfulBlogPosts, dataRegionPopularPort, dataRegionsHelpfulAdvice } from '../../fakedata'

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
			<Articles articles={dataRegionArticles} />
			<HelpfulAdvice {...dataRegionsHelpfulAdvice} />
			<PopularCruises />
			<HelpfulBlogPosts cards={dataRegionHelpfulBlogPosts} />
			<About />
			<Advantages />
		</>
	)
}

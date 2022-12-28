import { Articles, HeaderAnchors, MapsImages } from '../../components'
import { dataRegionArticles } from '../../fakedata'
import { PopularCruises } from '../AllRegions/sections'
import { Desc, Intro, Countries, HelpfulPosts, PopularPort, HelpfulAdvice } from './sections'

export const SingleRegionPage = () => {
	return (
		<>
			<HeaderAnchors />
			<Intro />
			<PopularCruises />
			<Desc />
			<Countries />
			<MapsImages />
			<PopularPort />
			<Articles articles={dataRegionArticles} />
			<HelpfulAdvice />
			<PopularCruises />
			<HelpfulPosts />
		</>
	)
}

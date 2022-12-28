import { HeaderAnchors, MapsImages } from '../../components'
import { PopularCruises } from '../AllRegions/sections'
import { Desc, Intro, Countries, HelpfulPosts, PopularPort } from './sections'

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
			<HelpfulPosts />
		</>
	)
}

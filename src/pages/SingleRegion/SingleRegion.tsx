import { HeaderAnchors } from '../../components'
import { PopularCruises } from '../AllRegions/sections'
import { Desc, Intro, Countries, HelpfulPosts } from './sections'

export const SingleRegionPage = () => {
	return (
		<>
			<HeaderAnchors />
			<Intro />
			<PopularCruises />
			<Desc />
			<Countries />
			<HelpfulPosts />
		</>
	)
}

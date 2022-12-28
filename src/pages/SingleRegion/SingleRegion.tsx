import { HeaderAnchors } from '../../components'
import { PopularCruises } from '../AllRegions/sections'
import { Desc, Intro } from './sections'

export const SingleRegionPage = () => {
	return (
		<>
			<HeaderAnchors />
			<Intro />
			<PopularCruises />
			<Desc />
		</>
	)
}
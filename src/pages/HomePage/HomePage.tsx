import { About, Advantages, Banner, RegionsCards } from '../../components/RepeaterBlocks'
import { Intro, Search, Partners, Sale } from './sections'

export const HomePage = () => {

	return (
		<>
			<Intro />
			<Search />
			<Sale />
			<Banner />
			<RegionsCards />
			<Partners />
			<About />
			<Advantages />
		</>
	)
}

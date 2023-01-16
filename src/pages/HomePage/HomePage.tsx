import { About, Advantages, Banner, IntroHome, RegionsCards } from '../../components/RepeaterBlocks'
import { Search, Partners, Sale } from './sections'

export const HomePage = () => {

	return (
		<>
			<IntroHome />
			<Search />
			<Sale />
			<Banner />
			<RegionsCards position="grid" />
			<Partners />
			<About />
			<Advantages />
		</>
	)
}

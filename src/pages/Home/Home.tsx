import { Banner } from '../../components'
import { Intro, Search, About, Advantages, Partners, Regions, Sale } from './sections'

export const HomePage = () => {

	return (
		<>
			<Intro />
			<Search />
			<Sale />
			<Regions />
			<Banner />
			<Partners />
			<About />
			<Advantages />
		</>
	)
}

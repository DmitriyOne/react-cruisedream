import { Banner } from '../../components'
import { Intro, Search, About, Advantages, Partners, Regions, Sale } from './sections'

export const HomePage = () => {

	return (
		<>
			<Intro />
			<Search />
			<Sale />
			<Banner />
			<Regions />
			<Partners />
			<About />
			<Advantages />
		</>
	)
}

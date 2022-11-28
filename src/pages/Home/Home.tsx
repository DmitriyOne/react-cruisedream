import { Intro, Search, Banner, About, Advantages, Partners, Regions, Sale } from './sections'

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

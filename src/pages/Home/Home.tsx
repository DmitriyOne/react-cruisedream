import { Intro, Banner, About, Advantages, Partners, Regions, Sale } from './sections'

export const HomePage = () => {
	return (
		<>
			<Intro />
			<Sale />
			<Banner />
			<Regions />
			<Partners />
			<About />
			<Advantages />
		</>
	)
}

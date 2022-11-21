import { Intro } from './intro'
import { Banner } from './banner'
import { About } from './about'
import { Advantages } from './advantages'
import { Partners } from './partners'
import { Regions } from './regions'

export const HomePage = () => {
	return (
		<>
			<Intro />
			<Banner />
			<Regions />
			<Partners />
			<About />
			<Advantages />
		</>
	)
}

import { Intro } from './intro'
import { Banner } from './banner'
import { About } from './about'
import { Advantages } from './advantages'
import { Partners } from './partners'

export const HomePage = () => {
	return (
		<>
			<Intro />
			<Banner />
			<Partners />
			<About />
			<Advantages />
		</>
	)
}
